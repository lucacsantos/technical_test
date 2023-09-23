using BackEnd_Solution.Context;
using BackEnd_Solution.Domain;
using BackEnd_Solution.Infra.Data.Repositories;
namespace BackEnd_Solution.Infra
{
    public class EscolaridadeRepository : RepositoryBase<Escolaridade>,IEscolaridadeRepository
    {
        public EscolaridadeRepository(DataBaseContext context) : base(context)
        {
        }
    }
}
