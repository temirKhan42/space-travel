# Makefile

lint:
	npx eslint . --ext .js --ext .jsx

build:
	rm -rf dist
	NODE_ENV=production npx webpack

develop:
	npx webpack serve

install:
	npm ci
