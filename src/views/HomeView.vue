<template>
  <main>
      <RouterLink to="/create" class="btn btn-primary">
          Create Nhân Viên
      </RouterLink>
      <table class="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>name</th>
              <th>position</th>
              <th>departmen</th>
              <th>email:</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="nhanVien in nhanviens" :key="nhanVien.id">
                <td>{{ nhanVien.id }}</td>
                <td>{{ nhanVien.name }}</td>
                <td>{{ nhanVien.position }}</td>
                <td>{{ nhanVien.departmen }}</td>
                <td>{{ nhanVien.email }}</td>
                <td>{{ nhanVien.phone }}</td>
                <td>
                  <RouterLink :to="{name: 'detail', params: {id: nhanVien.id}}" class="btn btn-info">View</RouterLink>
                  <RouterLink :to="{name: 'edit', params: {id: nhanVien.id}}" class="btn btn-info">Edit</RouterLink>
                  <button class="btn btn-danger" @click="handleDelete(nhanVien.id)">Delete</button>
                </td>
              </tr>
          </tbody>
      </table>
  </main>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import instanceAxios  from '@/ultis/configAxios';

const nhanviens = async ()=> {
  const response = await instanceAxios.get('/nhanviens')
  nhanviens.value = response.data
}

const handleDelete = async (id) => {
  const isConfirm = confirm(" bạn muốn xóa ko")
  if(!isConfirm) return
  await instanceAxios.delete(`/nhanviens/${id}`)
  fetchnhanviens
}

</script>

<style lang="scss" scoped>

</style>