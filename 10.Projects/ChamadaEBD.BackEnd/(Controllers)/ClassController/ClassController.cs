using Microsoft.AspNetCore.Mvc;

namespace ChamadaEBD.BackEnd
{
    [ApiController]
    [Route("[Controller]")]
    public class ClassController : CrudControllerBase<Class>
    {
        public ClassController(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}
