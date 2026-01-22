using System.ComponentModel.DataAnnotations;

namespace ChamadaEBD.BackEnd
{
    public interface IEntityBase
    {
        [Key]
        long Id { get; set; }

        [Required]
        [StringLength(50, ErrorMessage = "Código com tamanho maior que o permitido")]
        string? Code { get; set; }
    }
}
