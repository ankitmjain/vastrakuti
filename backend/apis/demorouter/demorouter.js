const express = require('express');

const demoRouter = express.Router();

demoRouter.get("/version", (request, response) => {
    response.json({"module":"Customer","version": "1.0.0" });
});

demoRouter.get("/demorouter", (request, response) => {
     response.json([
        {
            "numberOfSubfolders": 2,
            "dateUpdated": "2020-05-05T16:47:06Z",
            "dateCreated": "2019-08-09T19:20:20Z",
            "id": 253658,
            "whitelistExempt": false,
            "accessLevel": 4,
            "nesting": 5,
            "name": "Test Folder 1",
            "parentId": 253071,
            "class": "Folder"
        },
        {
            "numberOfSubfolders": 0,
            "dateUpdated": "2020-04-16T17:33:47Z",
            "dateCreated": "2020-04-16T17:17:28Z",
            "id": 289289,
            "whitelistExempt": false,
            "accessLevel": 4,
            "nesting": 5,
            "name": "Test Folder 2",
            "parentId": 253071,
            "class": "Folder"
        },
        {
            "numberOfSubfolders": 0,
            "dateUpdated": "2020-04-16T17:34:12Z",
            "dateCreated": "2020-04-16T17:17:38Z",
            "id": 289290,
            "whitelistExempt": false,
            "accessLevel": 4,
            "nesting": 5,
            "name": "Test Folder 3",
            "parentId": 253071,
            "class": "Folder"
        },
        {
            "numberOfSubfolders": 1,
            "dateUpdated": "2020-05-05T16:45:35Z",
            "dateCreated": "2020-04-17T13:28:54Z",
            "id": 289325,
            "whitelistExempt": false,
            "accessLevel": 4,
            "nesting": 6,
            "name": "Nested Folder 1",
            "parentId": 253658,
            "class": "Folder"
        },
        {
            "numberOfSubfolders": 1,
            "dateUpdated": "2020-10-07T13:52:26Z",
            "dateCreated": "2020-05-05T16:45:35Z",
            "id": 291644,
            "whitelistExempt": false,
            "accessLevel": 4,
            "nesting": 7,
            "name": "Nested Folder 2",
            "parentId": 289325,
            "class": "Folder"
        },
        {
            "numberOfSubfolders": 0,
            "dateUpdated": "2020-05-05T16:47:06Z",
            "dateCreated": "2020-05-05T16:47:06Z",
            "id": 291646,
            "whitelistExempt": false,
            "accessLevel": 4,
            "nesting": 6,
            "name": "Testing Nesties 2",
            "parentId": 253658,
            "class": "Folder"
        },
        {
            "numberOfSubfolders": 0,
            "dateUpdated": "2020-10-07T13:52:26Z",
            "dateCreated": "2020-10-07T13:52:26Z",
            "id": 313597,
            "whitelistExempt": false,
            "accessLevel": 4,
            "nesting": 8,
            "name": "Deeply Nested Folder",
            "parentId": 291644,
            "class": "Folder",
            "description": "Testing one level deep"
        }
    ]);
});

module.exports = demoRouter;