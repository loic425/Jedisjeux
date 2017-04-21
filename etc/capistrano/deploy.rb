# config valid only for current version of Capistrano
lock '3.8.0'

set :symfony_directory_structure, 3
set :sensio_distribution_version, 5

set :application, 'Jedisjeux'
set :repo_url, 'git@bitbucket.org:jedisjeux/jdj.git'

# Default branch is :master
ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

set :deploy_to, '/home/jedisjeux/'

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
# set :log_level, :debug

# Default value for :pty is false
set :pty, true

set :symfony_roles, :web
set :symfony_default_flags, '--quiet --no-interaction'
set :symfony_assets_flags, '--symlink'
set :symfony_assetic_flags, ''
set :symfony_cache_clear_flags, ''
set :symfony_cache_warmup_flags, ''
set :symfony_env, 'prod'
set :symfony_parameters_upload, :ask
set :symfony_parameters_path, 'app/config/'

append :linked_files, fetch(:app_config_path) + '/parameters.yml', fetch(:web_path) + '/robots.txt', fetch(:web_path) + '/.htaccess'
append :linked_dirs, fetch(:web_path) + '/uploaded', fetch(:web_path) + '/uploads', fetch(:web_path) + '/media'

append :file_permissions_paths, fetch(:web_path) + '/uploaded', fetch(:web_path) + '/uploads', fetch(:web_path) + '/media'
append :file_permissions_users, 'apache'

set :permission_method,   :acl
set :use_set_permissions, true

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Bower
set :bower_target_path, lambda { "#{release_path}/web/assets/frontend/" }

set :keep_releases, 3

namespace :deploy do

  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
      # Here we can do anything such as:
      # within release_path do
      #   execute :rake, 'cache:clear'
      # end
    end
  end

end

namespace :deploy do
  task :migrate do
    invoke 'symfony:console', 'doctrine:migrations:migrate', '--no-interaction', 'db'
    invoke 'symfony:console', 'fos:elastica:populate'
  end
end

after 'deploy:updated', 'symfony:assets:install'
after 'deploy:updated', 'deploy:migrate'