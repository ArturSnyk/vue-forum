<template>
	<section>
		<h1>Forum settings</h1>
		<category-list :categories="categories"></category-list>
		<div class="mt-4">
			<h3>Add category</h3>
			<form @submit.prevent="addCategory(newCategory)"> <!-- we want to prevent default behaviour and call addCategory-->
				<div class="form-group">
					<label for="title">Title</label>
					<input
						v-model="newCategory.title"
						class="form-control"
						id="title"
						required/>
				</div>
				<div class="form-group">
					<label for="description">Description</label>
					<textarea
						v-model="newCategory.description"
						class="form-control"
						id="description"
						rows="3"/>
				</div>
				<div class="form-group">
					<label for="image">Image</label>
					<input
					v-model="newCategory.image_url"
					class="form-control"
					id="image"/>
				</div>
				<button type="submit" class="btn btn-success">Add category</button>
			</form>
		</div>
	</section>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  data: () => ({
    newCategory: {
      title: '',
      description: '',
      image_url: '',
    },
  }),
  mounted() {
    const admin = this.isAdmin();
    if (!admin) {
      this.$router.push('/forum');
    }
  },
  computed: mapState(['categories']),
  methods: mapActions(['isAdmin', 'addCategory']),
};
</script>
