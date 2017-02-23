"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var proofers = [
            { id: 1, name: 'Jasmine Miller', school: 'Stanford University' },
            { id: 2, name: 'Martha Hoover', school: 'Vanderbilt University' },
            { id: 3, name: 'Christopher Hooper', school: 'University of Richmond' },
            { id: 3, name: 'Bryan Casey', school: 'College of William and Mary' },
        ];
        return { proofers: proofers };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map