<x-layout title="Nova Série">
    <form action="/series/salvar" method="POST">
        @csrf
        <div class="mb-3">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" class="form-control" name="nome" id="nome" aria-describedby="nome">
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
</x-layout>