let CorrectPost = {
    name: "test",
    bigin_at: "2020-12-15 13:56:00",
    status_id: 2,
    user_id:1,
    description:"sdddddddddd"
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

describe("Task test", function() {
    const assert = require("assert");
    const request = require("request");
    const host = require("../config/config.json").host;
    let port = require("../config/config.json").port;
    let url=host+":"+port
    it("test get", function(done) {
        request(
            {
                url: url + "/tasks/",
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
    it("test post", function(done) {
        request(
            {
                url: url + "/tasks",
                method: "POST",
                json: true,
                body: CorrectPost
            },
            function(err, response, body) {
                assert.strictEqual(err, null);
                assert.strictEqual(response.statusCode, 201);
                assert.strictEqual(response.body.name, CorrectPost.name);
                assert.strictEqual(response.body.description, CorrectPost.description);
                assert.strictEqual(response.body.status_id, CorrectPost.status_id);
                assert.strictEqual(response.body.user_id, CorrectPost.user_id);
                assert.strictEqual(response.body.begin_at, CorrectPost.begin_at);
                lastid = response.body.id;
                done();
            }
        );
    });

});
