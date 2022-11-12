<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Matricula</th>
          <th>Nome</th>
          <th>E-mail corporativo</th>
          <th>Acoes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>650</td>
          <td>Paulo Sérgio</td>
          <td>paulo.sergio@tallos.com</td>
          <td>Opcoes</td>
        </tr>
        <tr>
          <td>650</td>
          <td>Paulo Sérgio</td>
          <td>paulo.sergio@tallos.com</td>
          <td>Opcoes</td>
        </tr>
        <tr>
          <td>650</td>
          <td>Paulo Sérgio</td>
          <td>paulo.sergio@tallos.com</td>
          <td>Opcoes</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserTable',
})
</script>
