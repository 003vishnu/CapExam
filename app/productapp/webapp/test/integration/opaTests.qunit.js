sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'productapp/test/integration/FirstJourney',
		'productapp/test/integration/pages/PoSetList',
		'productapp/test/integration/pages/PoSetObjectPage',
		'productapp/test/integration/pages/PoItemSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, PoSetList, PoSetObjectPage, PoItemSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('productapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePoSetList: PoSetList,
					onThePoSetObjectPage: PoSetObjectPage,
					onThePoItemSetObjectPage: PoItemSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);