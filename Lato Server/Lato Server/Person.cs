namespace Lato_Server
{
    public class Person
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Domain { get; set; }

        public string Email { get; set; }

        public Person() { }
    }
}

//    public class Student : Person
//    {
//        public Student() { }

//        public override string getPersonDetails()
//        {
//            return $"Studente: {Id} | {FirstName} {LastName} | Età: | Email: {Email}";
//        }

//    }

//    public class Teacher : Person
//    {
//        public Teacher() { }

//        public override string getPersonDetails()
//        {
//            return $"Docente: {Id} | {FirstName} {LastName} | Età: | Email: {Email}";
//        }
//    }
//}

