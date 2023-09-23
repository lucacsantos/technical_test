using BackEnd_Solution.Context;
using BackEnd_Solution.Domain;
using BackEnd_Solution.Infra.Data.Repositories;

namespace BackEnd_Solution.Infra
{
    public sealed class UsuarioRepository : RepositoryBase<Usuario>, IUsuarioRepository
    {
        public UsuarioRepository(DataBaseContext context) : base(context)
        {
        }
    }
}