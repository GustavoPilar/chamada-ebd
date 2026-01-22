using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ChamadaEBD.BackEnd
{
    #region User
    [Table("Users")]
    public class User : IEntityBase
    {
        #region IEntityBase :: Id, Code
        public long Id { get; set; }
        public string? Code { get; set; }
        #endregion

        #region Fields :: Name, Age, Phone, Active
        [Required]
        [StringLength(150, ErrorMessage = "Nome com tamanho maior que o permitido.")]
        public string? Name { get; set; }

        [Range(0, 120, ErrorMessage = "A idade deve ser entre 0 a 120 anos")]
        public int Age { get; set; }

        [Phone(ErrorMessage = "Telefone com formato inválido")]
        public string? Phone { get; set; }

        [Required]
        public bool Active { get; set; }
        #endregion
    }
    #endregion

    #region Student
    [Table("Students")]
    public class Student : IEntityBase
    {
        #region IEntityBase
        public long Id { get; set; }
        public string? Code { get; set; }
        #endregion

        #region Fields :: AttendanceCount, AbsenceCount, AttendancePercentage, Description, UserId, ClassRoomId
        [Required]
        public int AttendanceCount { get; set; }

        [Required]
        public int AbsenceCount { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "A porcentagem deve ser entre 0 a 100")]
        public int AttendancePercentage { get; set; }

        [StringLength(150, ErrorMessage = "Descrição com tamanho maior que o permitido")]
        public string? Description { get; set; }

        [Required]
        public long UserId { get; set; }

        [Required]
        public long ClassRoomId { get; set; }
        #endregion

        #region Navigation :: User, ClassRoom 
        [JsonIgnore]
        public User? User { get; set; }

        [JsonIgnore]
        public ClassRoom? ClassRoom { get; set; }
        #endregion
    }
    #endregion

    #region Teacher
    [Table("Teachers")]
    public class Teacher : IEntityBase
    {
        #region IEntityBase
        public long Id { get; set; }
        public string? Code { get; set; }
        #endregion

        #region Fields :: attendanceCount, AbsenceCount, AttendancePercentage, Description, UserId, ClassRoomId
        [Required]
        public int attendanceCount { get; set; }

        [Required]
        public int AbsenceCount { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "A Porcentagem deve ser entre 0 e 100")]
        public int AttendancePercentage { get; set; }

        [StringLength(150, ErrorMessage = "Descrição com tamanho maior que o permitido")]
        public string? Description { get; set; }

        [Required]
        public long UserId { get; set; }

        [Required]
        public long ClassRoomId { get; set; }
        #endregion

        #region Naviagation :: User, ClassRoom
        [JsonIgnore]
        public User? User { get; set; }

        [JsonIgnore]
        public ClassRoom? ClassRoom { get; set;}
        #endregion
    }
    #endregion

    #region StudentChekin
    [Table("StudentCheckins")]
    public class StudentCheckin : IEntityBase
    {
        #region IEntityBase
        public long Id { get; set; }
        public string? Code { get; set; }
        #endregion

        #region Fields :: DateTimeChekin, Description, StudentId, ClassRoomId
        [Required(ErrorMessage = "É necessário ter uma data para a chamada")]
        public DateTime DateTimeChekin { get; set; }

        [StringLength(150, ErrorMessage = "Descrição com tamanho maior que o permitido")]
        public string? Description { get; set; }

        [Required(ErrorMessage = "É necessário ter um aluno para a chamada")]
        public long StudentId { get; set; }

        [Required(ErrorMessage = "É necessário ter uma sala para a chamada")]
        public long ClassRoomId { get; set; }
        #endregion

        #region Navigation :: Student, ClassRoom
        [JsonIgnore]
        public Student? Student { get; set; }

        [JsonIgnore]
        public ClassRoom? ClassRoom { get; set; }
        #endregion
    }
    #endregion

    #region StudentChekin
    [Table("TeacherCheckins")]
    public class TeacherCheckin : IEntityBase
    {
        #region IEntityBase
        public long Id { get; set; }
        public string? Code { get; set; }
        #endregion

        #region Fields :: DateTimeChekin, Description, HasClass, TeacherId, ClassRoomId
        [Required(ErrorMessage = "É necessário ter uma data para a chamada")]
        public DateTime DateTimeChekin { get; set; }

        [StringLength(150, ErrorMessage = "Descrição com tamanho maior que o permitido")]
        public string? Description { get; set; }

        [Required]
        public bool HasClass { get; set; }

        [Required(ErrorMessage = "É necessário ter um professor para a chamada")]
        public long TeacherId { get; set; }

        [Required(ErrorMessage = "É necessário ter uma sala para a chamada")]
        public long ClassRoomId { get; set; }
        #endregion

        #region Navigation :: Teacher, ClassRoom
        [JsonIgnore]
        public Teacher? Teacher { get; set; }

        [JsonIgnore]
        public ClassRoom? ClassRoom { get; set; }
        #endregion
    }
    #endregion

    #region ClassRoom
    [Table("ClassRooms")]
    public class ClassRoom : IEntityBase
    {
        #region IEntityBase
        public long Id { get; set; }
        public string? Code { get; set; }
        #endregion

        #region Fields :: Description, StartHour, StartFinish, StudentsCount, TeachersCount
        [Required]
        [StringLength(150, ErrorMessage = "Descrição com tamanho maior que o permitido")]
        public string? Description { get; set; }

        [Required]
        public TimeOnly StartHour { get; set; }

        [Required]
        public TimeOnly StartFinish { get; set; }

        [Required]
        public int StudentsCount { get; set; }

        [Required]
        public int TeachersCount { get; set; }

        [Required]
        public bool Active { get; set; }
        #endregion

        #region Navigation :: Teachers, Students
        [JsonIgnore]
        public ICollection<Teacher>? Teachers { get; set; }
        
        [JsonIgnore]
        public ICollection<Student>? Students { get; set; }

        [JsonIgnore]
        public ICollection<StudentCheckin>? StudentsChekins { get; set; }

        [JsonIgnore]
        public ICollection<TeacherCheckin>? TeachersChekins { get; set; }
        #endregion
    }
    #endregion
}
