#!/usr/bin/env bash

source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/../../../bash/common.lib.sh"
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/../../../bash/application.sh"

print_header "Installing dependencies" "Jedisjeux"
run_command "composer install --no-interaction --prefer-dist" || exit $?
run_command "composer dump-env test" || exit $?
