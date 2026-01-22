namespace ChamadaEBD.BackEnd
{
    public interface IRepositoryBase<TEntity>
        where TEntity : class, IEntityBase
    {
        Task<IEnumerable<TEntity>> GetEntitiesAsync();
        Task<TEntity?> GetEntityByIdAsync(long id);
        IQueryable<TEntity> GetQueryable();
        TEntity Save(TEntity entity);
        TEntity Update(TEntity entity);
        void Delete(TEntity entity);
    }
}
