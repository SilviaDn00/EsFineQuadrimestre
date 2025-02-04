namespace Lato_Server
{
    public static class PersonData
    {
        public static List<Person> GetPeople()
        {
            return new List<Person>
            {
                new Person
                {
                    Id = Guid.NewGuid(),
                    FirstName = "Luca",
                    LastName = "Bianchi",
                    DateOfBirth = new DateTime(1990, 5, 15),
                    Domain = "Studenti",
                    Email = "lbianchi@studenti.com"
                },
                new Person
                {
                    Id = Guid.NewGuid(),
                    FirstName = "Maria",
                    LastName = "Rossi",
                    DateOfBirth = new DateTime(1985, 3, 25),
                    Domain = "Docenti",
                    Email = "mrossi@docenti.com"
                },
                new Person
                {
                    Id = Guid.NewGuid(),
                    FirstName = "Ilenia",
                    LastName = "Taccogna",
                    DateOfBirth = new DateTime(2001, 5, 15),
                    Domain = "Studenti",
                    Email = "itaccogna@studenti.com"
                },
                 new Person
                {
                    Id = Guid.NewGuid(),
                    FirstName = "Silvia",
                    LastName = "DeNico",
                    DateOfBirth = new DateTime(2000, 2, 6),
                    Domain = "Studenti",
                    Email = "sdenicolo@studenti.com"
                }
            };
        }
    }
}