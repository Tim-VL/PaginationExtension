// src/Resources/app/administration/main.js

const { Component } = Shopware;

Component.override('sw-pagination', {
    computed: {
        perPageOptions() {
            return [
                { value: 10, label: '10' },
                { value: 25, label: '25' },
                { value: 50, label: '50' },
                { value: 100, label: '100' },
                { value: 250, label: '250' },
                { value: 500, label: '500' }
            ];
        }
    },

    created() {
        // Only set default limit if it's not already stored by the user
        if (!this.limit || !this.perPageOptions.find(option => option.value === this.limit)) {
            this.limit = 100;
        }
    }
});
