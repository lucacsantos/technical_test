using FluentValidation;

namespace BackEnd_Solution.Domain
{
    public class UsuarioValidators : AbstractValidator<Usuario>
    {
        public UsuarioValidators()
        {
            RuleFor(x => x.Nome).NotEmpty().NotEqual("").NotEqual("string").Length(20).WithMessage("máximo de caractéres é 20");
            RuleFor(x => x.SobreNome).NotEmpty().NotEqual("").NotEqual("string").Length(100).WithMessage("máximo de caractéres é 100");
            RuleFor(x => x.Email).NotEmpty().NotEqual("").Length(50).WithMessage("máximo de caractéres é 50").EmailAddress();
        }
    }
}
