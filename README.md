# Google Keeps Clone
A clone project of Google Keeps using Svelte and Nest.js


## Funcionalidades
- [ ] Criar / Editar / Excluir uma Nota
- [ ] Criar / Editar / Excluir Lembretes
- [ ] Criar / Editar / Excluir Marcadores
- [ ] Arquivar Notas e/ou Lembretes
- [ ] Pesquisar por Notas e/ou Lembretes

## Requisitos não funcionais
### Notas
- Ao ser criada, deve ser listada na aba de notas
- Uma nota pode virar um lembrete
- Ao ser excluída deve ir para a aba Lixeira
- Ao ser Arquivada deve ir para aba arquivo
- Pode receber Marcadores

### Lembretes
- Ao ser criada, deve ser listada na aba de Lembretes e na aba de notas 
- Um lembrete pode virar uma nota
- Ao ser excluída deve ir para a aba Lixeira
- Ao ser Arquivada deve ir para aba arquivo
- Pode receber Marcadores

### Marcadores
- Ao ser criada, deve ter uma aba para ela
- Notas e Lembretes podem possuir marcadores criados
- Na sua aba, deve ser listada somente Notas ou Lembretes que contenham ela como sua marcadora 

### Arquivos
- Deve ser listado somente Notas e/ou lembretes que foram arquivados em sua aba
- Pode ser recuperado Notas e/ou lembretes
- As funcionalidades devem ficar desabilitadas enquanto estiverem arquivadas

### Lixeira
- Deve ser listado somente Notas e/ou lembretes que foram excluídos em sua aba
- Pode ser recuperado Notas e/ou lembretes
- Deve possuir somente as funcionalidades de excluir definitivamente e recuperar
