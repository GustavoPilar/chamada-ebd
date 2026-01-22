namespace ChamadaEBD.BackEnd
{
    public interface IUnitOfWork
    {
        IRepositoryBase<TEntity> GetRepository<TEntity>() where TEntity : class, IEntityBase;
        Task CommitAsync();
    }
}
