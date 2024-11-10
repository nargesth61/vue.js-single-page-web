<template>
    <div class="col-md-6 m-3">
        <b-form @submit.prevent="validate">

            <b-form-group id="input-group-2" label="Title" label-for="input-2">
                <b-form-input id="input-2" v-model.lazy.trim="forminfo.title"></b-form-input>
            </b-form-group>
            <p> {{ forminfo.formtitleerror }}</p>


            <label for="textarea-auto-height " class="mb-2">Text</label>
            <b-form-textarea id="textarea-auto-height" v-model.lazy.trim="forminfo.body"
                placeholder="Fixed height textarea" rows="6" no-resize></b-form-textarea>
            <p> {{ forminfo.formtbodyerror }}</p>
            <b-button type="submit" class="btn-dark mt-3" variant="primary" :disabled="loading">

                <b-spinner v-if="loading" small label="Small Spinner"></b-spinner>

                edite
            </b-button>
        </b-form>

    </div>
</template>

<script>
import axios from 'axios';
import { reactive, ref } from 'vue';
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router';

export default {

    setup() {
        const forminfo = reactive({
            title: '',
            formtitleerror: '',
            body: '',
            formtbodyerror: '',
        });
        const loading = ref(false)
        const route = useRoute();
        function getPost() {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
                .then(function (response) {
                    // handle success
                    forminfo.title = response.data.title;
                    forminfo.body = response.data.body;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
        getPost();
        function validate() {
            if (forminfo.title === "") {
                forminfo.formtitleerror = "title is requird"
            } else {
                forminfo.formtitleerror = ""
            }
            if (forminfo.body === "") {
                forminfo.formtbodyerror = "body is requird"
            } else {
                forminfo.formtbodyerror = ""
            }
            if (forminfo.title !== "" && forminfo.body !== "") {
                loading.value = true
                updatepost()

            }
        }
        function updatepost() {
            axios.put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
                id: route.params.id,
                title: forminfo.title,
                body: forminfo.body,
                userId: 1,
            }).then(function () {
                loading.value = false,
                    Swal.fire({
                        title: 'thanks',
                        text: 'post update successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
            }).catch(function (error) {
                // handle error
                console.log(error);
            }).finally(function () {
                // always executed
            });
        }
        return { forminfo, validate, loading }
    }
}
</script>

<style></style>