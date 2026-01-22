using Microsoft.AspNetCore.Mvc;

namespace ChamadaEBD.BackEnd
{
    [ApiController]
    [Route("[controller]")]
    public class ClassRoomController : CrudControllerBase<ClassRoom>
    {
        public ClassRoomController(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}
