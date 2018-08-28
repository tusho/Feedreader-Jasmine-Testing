$(document).ready((function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it(' have a defined URL which is not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
              expect(allFeeds[i].url).toBeDefined();
              expect(allFeeds[i].url.length).not.toBe(0);
            };
        });

        it(' have a defined name which is not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
              expect(allFeeds[i].name).toBeDefined();
              expect(allFeeds[i].name.length).not.toBe(0);
            };
        });

    });

    describe('The menu', function() {
        var bodyEl = $('body');
        var menuIcon = $('.menu-icon-link');

        it('should be hidden by default', function() {
            expect((bodyEl).hasClass('menu-hidden')).toBe(true);
        });

        it('should change visibility when menu icon is clicked', function() {
            menuIcon.click();
            expect((bodyEl).hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect((bodyEl).hasClass('menu-hidden')).toBe(true);
        });

    });

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('loads at least one feed', function(done) {
            var feedEntries = $('.feed .entry');
            expect(feedEntries.length).toBeGreaterThan(0);
            done();
        });

    });


    describe('New Feed Selection', function() {

        var oldFeed, newFeed, feedAfterFirstLoad;

        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeed = $('.feed').html();
                loadFeed(1, function() {
                    newFeed = $('.feed').html();
                    done();
                });
            });
        });

        it('loads at least one feed', function() {
            expect(oldFeed).not.toBe(newFeed);
        });

    });

}()));
