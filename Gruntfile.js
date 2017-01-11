module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            push: {
                files: [
                    // includes files within path and its sub-directories
                    {
                        expand: true,
                        src: [
                            'index.html',
                            'dist/**',
                            'public/**'
                        ],
                        dest: '_site/'
                    },
                ],
            },
        },
        buildcontrol: {
            options: {
                dir: '_site',
                commit: true,
                push: true,
                message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
            },
            pages: {
                options: {
                    remote: 'git@github.com:disjfa/vuetify-sidebar-template.git',
                    branch: 'gh-pages'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-build-control');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('push', ['copy', 'buildcontrol']);
};
