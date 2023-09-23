namespace BackEnd_Solution.Domain
{
    public interface IRepositoryBase<T> where T : class
    {
        Task<List<T>> GetAll();
        Task<T> GetById(int id);
        Task Create(T entity);
        Task Update(T entity);
        Task Delete(T entity);
    }
}
