using Microsoft.AspNetCore.Mvc;

namespace ChamadaEBD.BackEnd
{
    [ApiController]
    [Route("[controller]")]
    public class TeacherCheckinController : CrudControllerBase<TeacherCheckin>
    {
        public TeacherCheckinController(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}
