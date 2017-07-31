/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        describe('Checks array for valid url', function() {
            //var length = allFeeds.length;

            function test_my_url(array) {
                it('should check allFeeds urls', function() {
                    expect(array.url).not.toBe('null');
                    expect(arraylurl.length).not.toBe(0);
                });
                for (var i = 0; i < allFeeds.length; i++) {
                    test_my_url(allFeeds[i]);
                }
            }
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        describe('Checks array for valid names', function() {

            function test_my_name(array) {
                it('should check allfeeds names', function() {
                    expect(array.name).not.toBeDefined();
                    expect(arraylurl.length).not.toBe('');
                });
                for (var i = 0; i < allFeeds.length; i++) {
                    test_my_name(allFeeds[i]);
                }
            }
        });

        /* TODO: Write a new test suite named "The menu"   <--   NEW SUITE */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        describe('The menu', function() {

            it('the menu is hidden', function() {
                var body = document.getElementsByTagName("body")[0].getAttribute("class");
                expect(body).toBe('menu-hidden');
            });
        });


        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        describe('the menu appears when icon clicked and disappears when clicked again', function() {

            it('checks menu-hidden is added to body or removed if present when button clicked', function() {
                var bodyAttribute = document.getElementsByTagName("body")[0].getAttribute("class");
                expect(bodyAttribute).toBe('menu-hidden');
                // alert(bodyAttribute);
                var menuIcon = $('.menu-icon-link');
                menuIcon.trigger('click');
                bodyAttribute = document.getElementsByTagName("body")[0].getAttribute("class");
                // alert(bodyAttribute);
                expect(bodyAttribute).not.toBe('menu-hidden');

            });
        });
    });

    /* TODO: Write a new test suite named "Initial Entries"  <-  New SUITE */
    // This seems likely to be that trickier asynchronous one.  Remember done() from last example in 
    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
    describe('Initial Entries', function() {
            beforeEach(function(done) {
                loadFeed(function() {
                    done();
                });
            });

            it('should have at least one entry withing the feed container', function(done) {
                var feed = document.getElementsByClassName('feed');
                expect(feed.hasChildNodes()).toBe(true);
            })
        })
        /* TODO: Write a new test suite named "New Feed Selection" <- New SUITE */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
}());