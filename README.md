# README #
 
## Este repositório é dedicado ao projeto 01 do módulo 01 do Curso DevInHouse- Turma Edp ##


 O projeto 01 contém um formulário que armazena os dados digitados do usuário, com objetivo de armazenar dicas para desenvolvimento de software.


## Conteúdo da pagina	

 * Header 
 * Logo
 * Titulo do site.
			
 *Formulário(lado esquerdo) 
			
 Contém 5 labels e 5 inputs correspondentes e dois botões (Salvar e Limpar):

1. Título
 Input do tipo text de no minimo 8 caracteres e no máximo 64.
2. Linguagem/Skill
 Input do tipo text de no minimo 4 caracteres e no máximo 16.
3. Categoria
 Input do tipo select com 4 opções.
4. Descrição
 Textarea de no minimo 32 caracteres e no máximo 512.
5. URL
 Input do tipo url, recebe somente url mas seu cadastro é opcional. 						
6. Botões
 Limpar: button do tipo reset que limpa o formulário.
 Salvar: button do tipo submit, envia e salva as informações no cartão.
				
## Painel Central(posicão central)

 Cartões de estatisticas:
			
1. Contém cinco cartões, onde quatro deles mostram a quantidade de sua categoria e o ultimo mostrando o total.

 Barra de pesquisa com dois botões:
1. Botão pesquisar(lupa) que filtra a palavra e compara com o titulo das dicas cadastradas.
2. Botão limpar(X) que zera o campo de pesquisa e retorna a lista.

 Quadro de cartões
 
1. Espaço onde cartões criados são criados.

  Cartões:

-  Contem uma lista que é armazenada dentro de uma div onde os dados estão organizados.

-  Além dos dados cada lista cadastrada contém 3 botões sendo eles respectivamente: Video, Editar e   Excluir.
 

## Funcionalidades ##

1- Salvar: Pega os dados contidos no formulário e salva numa lista, nessa lista além dos dados também é contido 3 botões sendo eles: Video,Editar, Excluir.
 * Vídeo: Botão que ao clicar se abre uma nova janela, redirecionado voce ao link cadastrado no formulário.
 
 * Editar: Botão que ao clicar retorna as informações ao formulário para edição.
 
 * Excluir: Botão que ao clicar pergunta ao usuário se o mesmo deseja excluir a dica caso o usuário confirme a exclusão.
 
**Os dados salvos são armazenados no localStorage e podem ser recarregados ao atualizar ou reabrir a pagina.**

2- Atualiza Lista: Toda vez que o usuário faz alguma alteração, seja salvar um novo formulário ou editar ele atualiza e mostra os dados corretamente na tela.

3- Pesquisar: Filtra por título os dados informados no campo de pesquisa e retorna na tela os que correspondem ao que foi digitado.

## Observações ##

**O projeto foi desenvolvido com script type="module" e com isso é necessário um simulador de servidor para utiliza-lo.**
**Live-Server é o recomendado.**


## Desenvolvido por Gabriel Fernandes Amorim ##

