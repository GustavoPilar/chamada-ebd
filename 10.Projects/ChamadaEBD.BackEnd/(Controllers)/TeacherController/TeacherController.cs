using Microsoft.AspNetCore.Mvc;

namespace ChamadaEBD.BackEnd
{
    [ApiController]
    [Route("[Controller]")]
    public class TeacherController : CrudControllerBase<Teacher>
    {
        public TeacherController(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        #region Actions
        [HttpGet("ClassRoom/{classRoomId:long}")]
        public async Task<ActionResult<IEnumerable<Teacher>>> GetTeacherByClassRoom(long classRoomId)
        {
            IQueryable<Teacher> queryable = this.repository.GetQueryable();

            List<Teacher> entities = queryable.Where(x => x.ClassRoomId == classRoomId).ToList();

            if (entities is null)
                return NotFound("Entidades não encontradas");

            return Ok(entities);
        }
        #endregion
    }
}
