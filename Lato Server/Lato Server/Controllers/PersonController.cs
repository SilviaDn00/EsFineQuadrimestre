using Microsoft.AspNetCore.Mvc;

namespace Lato_Server.Controllers
{
    [Route("api/[controller]")]  //[controller] viene sostituito da Person (PersonController)
    [ApiController]

    public class PersonController : ControllerBase
    {
        // Database temporaneo
        private static List<Person> peopleList = new List<Person>();

        static PersonController() // Costruttore statico per inizializzare i dati
        {
            // Popola peopleList con i dati provenienti dalla classe PersonData
            peopleList = PersonData.GetPeople();  // Ottieni i dati da PersonData
        }


        // GET:
        [HttpGet]
        public ActionResult<IEnumerable<Person>> GetPeople()
        {
            return Ok(peopleList);
        }

        // GET:
        [HttpGet("{id}")]
        public ActionResult<Person> GetPerson(Guid id)
        {
            var person = peopleList.FirstOrDefault(p => p.Id == id);
            if (person == null)
                return NotFound();

            return Ok(person);
        }

        // POST:
        [HttpPost]
        public ActionResult<Person> CreatePerson([FromBody] Person newPerson)
        {
            // Genera un nuovo ID univoco per la persona
            newPerson.Id = Guid.NewGuid();

            // Calcola l'email automaticamente (se non è già stata calcolata)
            newPerson.Email = $"{newPerson.FirstName[0].ToString().ToLower()}{newPerson.LastName.ToLower()}@{newPerson.Domain.ToLower()}.com";

            // Aggiungi la persona alla lista in memoria
            peopleList.Add(newPerson);

            // Rispondi con un codice 201 (Created) e i dettagli della persona appena creata
            return CreatedAtAction(nameof(GetPerson), new { id = newPerson.Id }, newPerson);
        }

        // PUT:
        [HttpPut("{id}")]
        public ActionResult<Person> UpdatePerson(Guid id, [FromBody] Person updatedPerson)
        {
            var person = peopleList.FirstOrDefault(p => p.Id == id);
            if (person == null)
                return NotFound();

            person.FirstName = updatedPerson.FirstName;
            person.LastName = updatedPerson.LastName;
            person.DateOfBirth = updatedPerson.DateOfBirth;
            person.Domain = updatedPerson.Domain;
            person.Email = updatedPerson.Email;

            return Ok(person);
        }

        // PUT
        [HttpPut("email{id}")]
        public ActionResult<Person> UpdateEmail(Guid id, [FromBody] string newEmail)
        {
            var person = peopleList.FirstOrDefault(p => p.Id == id);
            if (person == null)
                return NotFound();

            person.Email = newEmail; // Directly update the email
            return Ok(person);
        }

        // DELETE
        [HttpDelete("{id}")]
        public ActionResult DeletePerson(Guid id)
        {
            var person = peopleList.FirstOrDefault(p => p.Id == id);
            if (person == null)
                return NotFound();

            peopleList.Remove(person);
            return NoContent(); // 204 No Content
        }
    }
}
