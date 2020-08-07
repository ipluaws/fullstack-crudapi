const express = require("express");
const app = express();
const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require("mongoose")
const tutorials = require("../app/models/tutorial.model.js")
const request = require('supertest');
const expect = require('expect');
const should = chai.should();

describe('GET /tutorials', function () {
	it('Should return all cars', function (done) {
		request(app)
			.get('/api/tutorials')
			.expect(200)
			.expect('Content-Type', /json/)
			.expect(function (res) {
				expect(Array.isArray(res.body)).toBe(true); // Response body should be array
				expect(res.body.length).toBe(0); // Array should be empty
			})
			.end(function (err, res) {
				if (err) return done(err);					
				done();
			});
	});
});