namespace BackEnd_Solution.Domain.Services
{
    public sealed class EscolaridadeService : IEscolaridadeService
    {
        private readonly IEscolaridadeRepository _escolaridadeRepository;

        public EscolaridadeService(IEscolaridadeRepository escolaridadeRepository)
            => _escolaridadeRepository = escolaridadeRepository;

        public async Task<List<Escolaridade>> ObterEscolaridades()
        {
            return await _escolaridadeRepository.GetAll();
        }
    }
}
