using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ChamadaEBD.BackEnd
{
    #region User
    [Table("Users")]
    public class User : IEntityBase
    {
        #region IEntityBase
        public long Id { get; set; }
        public string? Code { get; set; }
        public string? Description { get; set; }
        #endregion

        #region Fields :: Name, Age, Phone, AttendanceCount, AbsenceCount, AttendanceFrenquency, Active, RegisterDateTime, ClassId
        [Required]
        [StringLength(150, ErrorMessage = "Nome com tamanho maior que o permitido.")]
        public string? Name { get; set; }

        [Range(0, 120, ErrorMessage = "A idade deve ser entre 0 a 120 anos")]
        public int Age { get; set; }

        [Phone(ErrorMessage = "Telefone com formato inválido")]
        public string? Phone { get; set; }

        [Required]
        public int AttendanceCount { get; set; }

        [Required]
        public int AbsenceCount { get; set; }

        [Required]
        [Range(0, 10, ErrorMessage = "Frequencia deve ser entre 0 a 100")]
        public int AttendanceFrequency { get; set; }

        [Required]
        public bool Active { get; set; }

        [Required(ErrorMessage = "É necessário ter uma data de registro")]
        public DateTime RegisterDateTime { get; set; }
        #endregion
    }
    #endregion

    #region ClassRoom
    [Table("Classes")]
    public class Class : IEntityBase
    {
        #region IEntityBase
        public long Id { get; set; }
        public string? Code { get; set; }
        public string? Description { get; set; }
        #endregion

        #region Fields :: StartHour, FinishHour, StudentsCount, TeachersCount, Active
        [Required(ErrorMessage = "É necessário ter uma hora de início")]
        public DateTime? StartHour { get; set; }

        [Required(ErrorMessage = "É necessário ter uma hora de término")]
        public DateTime? FinishHour { get; set; }

        [Required(ErrorMessage = "É necessário ter uma quantia de alunos")]
        public int StudentsCount { get; set; }

        [Required(ErrorMessage = "É necessário ter uma quantia de professores")]
        public int TeachersCount { get; set; }

        [Required(ErrorMessage = "É necessário informar o estado da classe")]
        public bool Active { get; set; }
        #endregion

        #region Navigation :: Users
        [JsonIgnore]
        public ICollection<User>? Users { get; set; }
        #endregion
    }
    #endregion

    #region UsersClasses
    [Table("UsersClasses")]
    public class UsersClasses : IEntityBase
    {
        #region IEntityBase
        public long Id { get; set; }
        public string? Code { get; set; }
        public string? Description { get; set; }
        #endregion

        #region Fields:
        [Required(ErrorMessage = "É necessário ter uma sala")]
        public long ClassId { get; set; }

        [Required(ErrorMessage = "É necessário ter um usuário")]
        public long UserId { get; set; }

        [Required(ErrorMessage = "É necessário ter um valor")]
        public bool IsTeacher { get; set; }
        #endregion

        #region Navigation
        [JsonIgnore]
        public Class? Class { get; set; }

        [JsonIgnore]
        public User? User { get; set; }
        #endregion
    }
    #endregion
}
