![Logo do projeto](Front_end_SmartBox/public/LogoProjeto.png)

## 📦 Contexto
A SmartBox é uma solução inovadora que combina praticidade, versatilidade e personalização total em um único produto. Com design inteligente e multifuncional, ela permite que o usuário adapte seu uso e aparência conforme suas necessidades e estilo pessoal. O cliente pode personalizar a caixa escolhendo diferentes opções de andares, cores para o chassi e as paletas, além de adicionar desenhos exclusivos nas áreas externas, criando uma caixa única e com a sua cara. Com resistência, leveza e facilidade no manuseio, a SmartBox é ideal tanto para usos rápidos quanto para soluções duradouras, entregando uma experiência completa que une design funcional, personalização detalhada e inovação prática para acompanhar diversos estilos de vida sem abrir mão da qualidade e da durabilidade.

## ✅ Requisitos Funcionais (RF)
| Código   | Requisito |
|----------|-----------|
| **RF001** | O cliente deve poder personalizar a SmartBox.<br>O sistema deve permitir a seleção de elementos como: número de andares, cores do chassi e das paletas (esquerda, direita e frontal), divisórias internas e desenhos personalizados nas paletas. |
| **RF002** | O sistema deve exibir uma pré-visualização da SmartBox em tempo real.<br>A interface 3D deve ser atualizada dinamicamente conforme o cliente altera os elementos do design. |
| **RF003** | O sistema deve permitir o envio automático das configurações personalizadas para o sistema de produção.<br>Após a finalização da personalização, os dados devem ser transmitidos diretamente para a fabricação. |
| **RF004** | O cliente deve poder criar uma conta e acessar seus projetos.<br>O sistema deve oferecer funcionalidades de cadastro, login, visualização de projetos salvos, pedidos anteriores e acompanhamento da produção. |
| **RF005** | O administrador deve poder gerenciar os pedidos.<br>Deve haver uma área administrativa para visualizar, controlar e organizar os pedidos personalizados recebidos. |
| **RF006** | O sistema deve enviar notificações sobre o status do pedido.<br>O cliente deve receber atualizações sobre a confirmação da personalização, início da produção e finalização do pedido. |
| **RF007** | O sistema deve permitir o gerenciamento de perfil.<br>Os usuários poderão editar informações pessoais como nome, e-mail e endereço de entrega. |

## 🎨 Características Customizáveis e Seus Valores

| Característica          | Valores Disponíveis                                      |
-------------------------|-----------------------------------------------------------|
| **Número de Andares**     | 1, 2, 3.                         |
| **Cor do Chassi**         | Preto, Azul, Vermelh, **null** (padrão).   |
| **Cor da Paleta Esquerda**| Preto, branco, amarelo, azul, vermelho, verde **null** (padrão).   |
| **Cor da Paleta Direita** | Preto, branco, amarelo, azul, vermelho, verde **null** (padrão).  |
| **Cor da Paleta Frontal** | Preto, branco, amarelo, azul, vermelho, verde **null** (padrão).   |
| **Desenho na Paleta Esquerda**  | Casa, barco, estrela, **null** (sem desenho). |
| **Desenho na Paleta Direita**   |  Casa, barco, estrela, **null** (sem desenho). |
| **Desenho na Paleta Frontal**   |  Casa, barco, estrela, **null** (sem desenho).  |
