<template>
    <v-layout row class="text-xs-center">

            <v-container style="position: relative;top: 13%;" class="text-xs-center"
                width="500px"
            >
                <v-card flat>
                    <v-card-title primary-title>
                        <h4>Login</h4>
                    </v-card-title>
                    <v-form>
                        <v-text-field prepend-icon="person" name="Username" label="Username"></v-text-field>
                        <v-text-field prepend-icon="lock" name="Password" label="Password" type="password"></v-text-field>
                        <v-card-actions>
                            <v-btn primary large block>Login</v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-container>
    </v-layout>
</template>

<script>
    export default {
        name: "LoginPage"
    }
</script>

<style scoped>

</style>