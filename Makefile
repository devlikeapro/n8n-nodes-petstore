.PHONY: clean build link start dev

lint:
	npm run lint

build:
	npm run build

link:
	npm link

start:
	cd ~/.n8n/custom && npm link @devlikeapro/n8n-nodes-petstore && n8n start

tests:
	npm run test

dev:
	make clean
	# make lint
	make tests
	make build
	make link
	make start

clean:
	rm -rf ./dist

up-swagger:
	wget -qO- https://petstore3.swagger.io/api/v3/openapi.json | jq '.' > ./nodes/Petstore/openapi.json
