using Microsoft.AspNetCore.Mvc;

namespace ChamadaEBD.BackEnd
{
    [ApiController]
    [Route("[controller]")]
    public class StudentCheckinController : CrudControllerBase<StudentCheckin>
    {
        public StudentCheckinController(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        #region Actions
        [HttpGet("ClassRoom/{classRoomId:long}")]
        public async Task<ActionResult<IEnumerable<StudentCheckin>>> GetTeacherByClassRoom(long classRoomId)
        {
            IQueryable<StudentCheckin> queryable = this.repository.GetQueryable();

            List<StudentCheckin> entities = queryable.Where(x => x.ClassRoomId == classRoomId).ToList();

            if (entities is null)
                return NotFound("Entidades não encontradas");

            return Ok(entities);
        }
        #endregion

        #region Actions
        [HttpPost("Any")]
        public async Task<ActionResult<IEnumerable<Teacher>>> SaveAnyCheckinsAsync(ICollection<StudentCheckin> studentCheckins)
        {

            if (studentCheckins is null)
                return BadRequest("Coleção nula");

            this.repository.SaveRange(studentCheckins);
            await _unitOfWork.CommitAsync();

            return Ok(studentCheckins);
        }
        #endregion
    }
}
