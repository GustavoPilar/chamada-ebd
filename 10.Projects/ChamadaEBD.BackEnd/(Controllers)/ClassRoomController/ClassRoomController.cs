using Microsoft.AspNetCore.Mvc;

namespace ChamadaEBD.BackEnd
{
    [ApiController]
    [Route("[Controller]")]
    public class ClassRoomController : CrudControllerBase<ClassRoom>
    {
        public ClassRoomController(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}
