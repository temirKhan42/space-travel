# Makefile

lint:
	npx eslint . --ext .js,.jsx

lint-fix:
	npx eslint . --ext .js,.jsx --fix

build:
	rm -rf dist
	NODE_ENV=production npx webpack

develop:
	npx webpack serve

install:
	npm ci
