// spec.js
var EC = protractor.ExpectedConditions;
var assert = require('chai').assert;
var should = require('chai').should();
var PageObjects = require('./PageObjects');


describe('My Health Clinic Home Page', function () {
    it('should have the correct url', function () {
        PageObjects.get();
        expect(browser.getCurrentUrl()).toBe(PageObjects.HomeUrl());
    });
});

describe('My Health Clinic Home Page', function () {
    it('should have a title', function () {
        PageObjects.get();
        expect(browser.getTitle()).toEqual('HealthClinic.biz');
    });
});

describe('My Health Clinic Home Page', function () {
    it('should have a logo', function () {
        PageObjects.get();
        element(PageObjects.logo).should.exist;
    });
});

describe('My Health Clinic Header Bar Join Us link', function () {
    it('should redirect to the Join Us page', function () {
        PageObjects.get();
        PageObjects.clickJoinUs();
        expect(browser.getCurrentUrl()).toBe(PageObjects.JoinUsUrl());
    });
});

describe('My Health Clinic Header Bar Login link', function () {
    it('should redirect to the Login page', function () {
        PageObjects.get();
        PageObjects.clickLogin();
        expect(browser.getCurrentUrl()).toBe(PageObjects.LoginUrl());
    });
});

describe('My Health Clinic Valid User Login', function () {
    it('should allow user login', function () {
        PageObjects.get();
        PageObjects.clickLogin();
        PageObjects.userLogin();
        expect(browser.getCurrentUrl()).toBe(PageObjects.HomeUrl());
    });
});

describe('My Health Clinic Valid Admin Login', function () {
    it('should allow admin login', function () {
        PageObjects.get();
        PageObjects.clickLogin();
        PageObjects.adminLogin();
        expect(browser.getCurrentUrl()).toBe(PageObjects.HomeUrl());
    });
});