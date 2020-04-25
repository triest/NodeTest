let CorrectPost = {
    name: "test"
};

let IncorrectPost = {
    name: ""
};

let EmptyNamePost = {
    name: ""
};

let UpdatePut = {
    name: "put"
};



var lastid;

describe("User test", function() {
    const assert = require("assert");
    const request = require("request");
    const host = require("../config/config.json").host;
    let port = require("../config/config.json").port;
    let url=host+":"+port
    it("test post", function(done) {
        request(
            {
                url: url + "/users",
                method: "POST",
                json: true,
                body: CorrectPost
            },
            function(err, response, body) {
                assert.strictEqual(err, null);
                assert.strictEqual(response.statusCode, 201);
                assert.strictEqual(response.body.name, CorrectPost.name);
                lastid = response.body.id;
                done();
            }
        );
    });

    it("empty name in post", function(done) {
        request(
            {
                url: url + "/users",
                method: "POST",
                json: true,
                body: EmptyNamePost
            },
            function(err, response, body) {
                assert.strictEqual(err, null);
                assert.strictEqual(response.statusCode, 400);
                done();
            }
        );
    });

    it("test get", function(done) {
        request(
            {
                url: url + "/users/",
                method: "get",
                json: false
            },
            function(err, response, body) {
                assert.strictEqual(err, null);
                assert.strictEqual(response.statusCode, 200);
              //  body = JSON.parse(body);
             //   assert.strictEqual(typeof body[0].name, "string");
             //   assert.strictEqual(body[0].name, CorrectPost.name);
                done();
            }
        );
    });

    it("test get single", function(done) {
        request(
            {
                url: url + "/users/" + lastid,
                method: "get",
                json: false
            },
            function(err, response, body) {
                assert.strictEqual(err, null);
                assert.strictEqual(response.statusCode, 200);
                body = JSON.parse(body);
                assert.strictEqual(typeof body.name, "string");
                assert.strictEqual(body.name, CorrectPost.name);
                done();
            }
        );
    });

    it("fail  get single", function(done) {
        request(
            {
                url: url + "/users/" + 9999999,
                method: "get",
                json: false
            },
            function(err, response, body) {
                assert.strictEqual(err, null);
                assert.strictEqual(response.statusCode, 404);
                done();
            }
        );
    });

    it("wrong id type in get", function(done) {
        request(
            {
                url: url + "/users/" + "it is id",
                method: "get",
                json: false
            },
            function(err, response, body) {
                assert.strictEqual(err, null);
                assert.strictEqual(response.statusCode, 400);
                done();
            }
        );
    });

    it("no valid name in post", function(done) {
        request(
            {
                url: url + "/users",
                method: "POST",
                json: true,
                body: IncorrectPost
            },
            function(err, response, body) {
                assert.strictEqual(err, null);
                assert.strictEqual(response.statusCode, 400);
                done();
            }
        );
    });

    it("test update", function(done) {
        request(
            {
                url: url + "/users/" + lastid,
                method: "PUT",
                json: true,
                body: UpdatePut
            },
            function(err, response, body) {
                assert.strictEqual(err, null);
                assert.strictEqual(response.statusCode, 200);
                assert.strictEqual(typeof response.body.name, "string");
                assert.strictEqual(response.body.name, UpdatePut.name);
                done();
            }
        );
    });

    it("incorrect update,wrong id", function(done) {
        request(
            {
                url: url + "/users/" + "fff",
                method: "PUT",
                json: true,
                body: UpdatePut
            },
            function(err, response, body) {
                assert.strictEqual(err, null);
                assert.strictEqual(response.statusCode, 400);
                done();
            }
        );
    });

    it("incorrect update,wrong name", function(done) {
        request(
            {
                url: url + "/users/" + lastid,
                method: "PUT",
                json: true,
                body: IncorrectPost
            },
            function(err, response, body) {
                assert.strictEqual(err, null);
                assert.strictEqual(response.statusCode, 400);
                done();
            }
        );
    });

    it("valid delete", function(done) {
        request(
            {
                url: url + "/users/" + lastid,
                method: "DELETE",
                json: true
            },
            function(err, response, body) {
                assert.strictEqual(err, null);
                assert.strictEqual(response.statusCode, 200);
                request(
                    {
                        url: url + "/users/" + lastid,
                        method: "get",
                        json: false
                    },
                    function(err, response, body) {
                        assert.strictEqual(err, null);
                        assert.strictEqual(response.statusCode, 404);
                    }
                );
                done();
            }
        );
    });

    it("invalid id in delete", function(done) {
        request(
            {
                url: url + "/users/" + "ds",
                method: "DELETE",
                json: true
            },
            function(err, response, body) {
                assert.strictEqual(err, null);
                assert.strictEqual(response.statusCode, 400);
                done();
            }
        );
    });

    it("delete not found id", function(done) {
        request(
            {
                url: url + "/users/" + 99999999999,
                method: "DELETE",
                json: true
            },
            function(err, response, body) {
                assert.strictEqual(err, null);
                assert.strictEqual(response.statusCode, 404);
                done();
            }
        );
    });
});
