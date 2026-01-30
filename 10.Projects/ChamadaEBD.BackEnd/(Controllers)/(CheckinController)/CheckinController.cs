using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ChamadaEBD.BackEnd._Controllers_._CheckinController_
{
    [ApiController]
    [Route("[Controller]")]
    public class CheckinController : CrudControllerBase<Checkin>
    {
        public CheckinController(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
            
        }

        #region Override :: PostRange()
        public override async Task<ActionResult<IEnumerable<Checkin>>> PostRange(IEnumerable<Checkin> entities)
        {
            IRepositoryBase<User> userRepository = _unitOfWork.GetRepository<User>();

            long[] usersIds = entities.Select(x => x.UserId).ToArray(); // Todos os usuários
            long[] usersPresentIds = entities.Where(x => x.IsPresent == true).Select(x => x.UserId).ToArray(); // Usuários com presença
            long[] usersAbsencesIds = entities.Where(x => x.IsPresent == false).Select(x => x.UserId).ToArray(); // Usuários com falta
            DateTime registerDateTime = entities.First().RegisterDateTime; // Pega o dia de registro da chamada
            List<User> users = userRepository.GetEntitiesByIdsAsync(usersIds).Result.ToList(); // Pega os usuários da chamada

            List<Checkin> checkins = this.repository.GetQueryable().Where(x => usersIds.Contains(x.Id) && x.RegisterDateTime.Date == registerDateTime.Date).ToList(); // Pega os usuários que já fizeram checkin na chamada atual, se houver

            foreach(User user in users) // Para cada usuário da chamada
            {
                if (usersPresentIds.Contains(user.Id)) // está na nos ids de presentes?
                {
                    Checkin? checkin = checkins.FirstOrDefault(x => x.UserId == user.Id);
                    if (checkin is not null) // está nos ids de atualização - ou seja, já estava na chamada antes?
                    {
                        if (entities.First(x => x.UserId == user.Id).IsPresent != checkin.IsPresent)
                        {
                            user.AttendanceCount--;
                            user.AbsenceCount++;
                        }
                    }
                    else
                    {
                        user.AttendanceCount++;
                    }
                }
                else // Senão, está nos ids de faltas
                {
                    if (usersIdsToUpdate.Contains(user.Id))
                    {
                        if (usersPresentIds.Contains(user.Id))
                        {
                            user.AttendanceCount++;
                            user.AbsenceCount--;
                        }
                    }
                    else
                    {
                        user.AbsenceCount++;
                    }
                }
            }

            foreach (long userId in usersPresentIds)
            {
                users.Find(x => x.Id == userId)!.AttendanceCount++;
            }

            foreach (long userId in usersAbsencesIds)
            {
                users.Find(x => x.Id == userId)!.AbsenceCount++;
            }

            foreach(User user in users)
            {
                int attendanceCount = user.AttendanceCount;
                int absenceCount = user.AbsenceCount;
                int total = attendanceCount + absenceCount;

                user.AttendanceFrequency = (absenceCount * 100) / total;
            }

            userRepository.UpdateRange(users);
            await _unitOfWork.CommitAsync();


            return await base.PostRange(entities);
        }
        #endregion

        #region Actions
        [HttpGet("List/byClass/{classId:long}")]
        public async Task<ActionResult<IEnumerable<Checkin>>> GetCheckinsByClass(long classId)
        {
            if (classId < 0)
                return BadRequest("Id inválido");

            List<Checkin> checkins = this.repository.GetQueryable().Where(x => x.ClassId == classId).AsNoTracking().ToList();

            if (checkins is null)
                return NotFound("Entidades não encontradas");

            return Ok(checkins);
        }

        [HttpGet("List/byClass/{classId:long}/ByRegisterDateTime")]
        public async Task<ActionResult<IEnumerable<Checkin>>> GetCheckinsByClassAndRegisterDateTime(long classId, [FromQuery]DateTime registerDateTime)
        {
            if (classId < 0)
                return BadRequest("Id inválido");

            List<Checkin> checkins = this.repository.GetQueryable().Where(x => x.ClassId == classId && x.RegisterDateTime.Date == registerDateTime.Date).AsNoTracking().ToList();

            if (checkins is null)
                return NotFound("Entidades não encontradas");

            return Ok(checkins);
        }
        #endregion
    }
}
