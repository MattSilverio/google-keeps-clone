# Google Keeps Clone


Para rodar localmente, baixe este repositório e o do [backend](https://github.com/MattSilverio/google-keeps-clone-be)

No terminal, baixe as dependências em ambos os diretórios(front e back) com:

```
npm install
```

No diretório do back, suba o banco de dados que está no Docker com:

```
docker compose up
```

Depois 
```
npm run start
```

Para visualizar o banco de dados, entre no diretorio do backend e rode o comando:
```
npx prisma studio
```
Geralmente a url, vai ficar no localhost:5555


Caso receba um erro sobre Table.Note doesn't exist, rode o seguinte comando para subir o schema do db:
```
npx prisma db push
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/IEetOxOJGT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Funcionalidades
- [X] Criar / Editar / Excluir uma Nota
- [X] Criar / Editar / Excluir Lembretes
- [ ] Criar / Editar / Excluir Marcadores
- [X] Arquivar Notas e/ou Lembretes
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
