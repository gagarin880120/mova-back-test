#!/bin/bash
echo """
env: flex
runtime: nodejs
resources:
  memory_gb: 4.0
  disk_size_gb: 10
manual_scaling:
  instances: 1
env_variables:
  SECRET_JWT_KEY: \"$SECRET_JWT_KEY\"
"""