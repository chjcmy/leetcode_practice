#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "--- PostgreSQL Setup Script ---"

# --- WARNING ---
echo "WARNING: This script will uninstall any existing Homebrew PostgreSQL installation."
echo "Please ensure you have backed up any important data."
read -p "Are you sure you want to continue? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "Aborting."
    exit 1
fi

# 1. Uninstall existing PostgreSQL
echo "Stopping and uninstalling existing PostgreSQL..."
brew services stop postgresql || true # Use || true to ignore errors if service is not running
brew uninstall postgresql || true # Use || true to ignore errors if not installed

# 2. Install new PostgreSQL
echo "Installing PostgreSQL..."
brew install postgresql

# 3. Start PostgreSQL service
echo "Starting PostgreSQL service..."
brew services start postgresql

# Wait a moment for the service to be ready
sleep 3

# 4. Create user and database
echo "Creating user 'test' and database 'test'..."
# The `createuser` command might be interactive or fail if the user exists.
# A non-interactive way is to use psql. We suppress errors if they already exist.
psql postgres -c "CREATE USER test;" || echo "User 'test' already exists. Skipping."
psql postgres -c "CREATE DATABASE test OWNER test;" || echo "Database 'test' already exists. Skipping."

# 5. Set password
echo "Setting password for user 'test' to 'test'..."
psql postgres -c "ALTER USER test WITH PASSWORD 'test';"

echo "--- Setup Complete! ---"
echo "You can now connect with:"
echo "User: test"
echo "Password: test"
echo "Database: test"
