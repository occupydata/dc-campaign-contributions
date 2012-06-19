# How are corporations influencing D.C. politics?

While [federal election law](http://www.fec.gov/pages/brochures/fecfeca.shtml#anchor257909) prohibits corporations (as well as labor unions, federal government contractors and foreign nationals) from contributing directly to national political campaigns, [D.C. campaign finance law](http://www.dcregs.org/Gateway/FinalAdoptionHome.aspx?RuleVersionID=3525191) permits direct corporate contributions to local political campaigns.

>3011.12 Corporations may make contributions in the District of Columbia.>3011.13 A corporation, its subsidiaries, and each political committee established financed, maintained or controlled by the corporation and its subsidiaries share a single contribution limitation.>3011.14 A corporation is deemed to be a separate entity; provided, that a corporation (corporation B) which is established, financed, maintained or controlled (51% or more) by another corporation (corporation A) is considered, for the purposes of the contribution limitations, a subsidiary of the other corporation (corporation A).>3011.18 Limitations on contributions, under § 3011, apply to a limited liability company depending on whether it is established as a corporation or partnership.
><cite>[57 D.C. Reg. 2229, 2241 (March 19, 2010)](http://www.dcegs.org/Gateway/FinalAdoptionHome.aspx?RuleVersionID=3525191)</cite>

### But campaign contributions are limited, right?

>3011.2	Contributions in support of either individual candidates or their authorized committees, or for the recall of an incumbent, under § 3000.6, shall be limited to the following:>a. Mayor, U.S. Senator and Representative to Congress - two thousand dollars ($2,000);>b. Chairman of the Council - one thousand five hundred dollars ($1,500);>c. Member of the Council at-large - one thousand dollars ($1,000);>d. Member of the Council elected from a ward and Member of the State Board of Education at-large -- five hundred dollars ($500);>e. Member of the State Board of Education elected from a ward – two hundred dollars ($200); >f. Official of a Political party – two hundred dollars ($200); and>g. Member of an Advisory Neighborhood Commission -- twenty-five dollars ($25).
><cite>[57 D.C. Reg. 2229, 2241 (March 19, 2010)](http://www.dcregs.org/Gateway/FinalAdoptionHome.aspx?RuleVersionID=3525191)</cite>


### So how do corporations circumvent these limits?

**Individuals or groups of people who control multiple corporations can use each corporation to donate the maximum amount.**

These corporations could be shell companies set up for this exclusive purpose. They could also be non-subsidiary businesses owned and operated by the same individuals. This second scenario is commonly seen amongst real estate developers, where individual development projects are frequently established as distinct corporations.

Business names and addresses were spelled several different ways in the campaign contributions database. It's an old tactic, but does make bundling harder to detect.

This problem is not just a minor concern - contributions from puppet corporations have accounted for 20.9% of all corporate contributions in the 2008 election cycle and 19.8% in 2012.

<div id="LineChartID165c378c0b660" class="chart"></div>


### How much money are corporations contributing?

While individual contributions are still dominant, corporations are donating millions of dollars directly to the coffers of their preferred candidates. What about labor union money? It's a pittance compared to how much corporations are donating.

<div id="BarChartID165c317a1c751" class="chart"></div>

### Where is this money being spent?

Corporations are overwhelmingly contributing to races outside of their ward and in some cases are contributing from outside the District of Columbia.

<div id="BarChartID582436ca55d9" class="chart"></div>

### What can I do to stop this abuse?

[Volunteer](http://dcpublictrust.org/wordpress1/volunteer/) with [D.C. Public Trust](http://dcpublictrust.org/wordpress1/) to collect signatures for a ballot initiative to ban corporations from making direct contributions to political campaigns and help curb "pay-to-play" in D.C. politics.

[Read more about the ballot initiative](http://dcpublictrust.org/wordpress1/about/faq/) and if you see a volunteer collecting signatures, please sign the petition! This petition can not be signed online.

### How did you gather this data?

Local campaign contribution data for the District of Columbia includes information on the name and address of the contributor, the date of contribution, the amount and the recipient of the contribution. This data was cleaned and geocoded, then merged with several other databases to reveal which corporations were bundling contributions.

1. Local campaign contribution data was obtained from the [D.C. Office of Campaign Finance](http://www.ocf.dc.gov/serv/index.shtm) through their data download feature.

2. The [Master Address Repository Batch Geocoder](http://octo.dc.gov/D.C./OCTO/Maps+and+Apps/Online+Mapping/All+Online+Maps/Master+Address+Repository) of the D.C. Office of the Chief Technology Officer was used to process D.C. addresses since it can understand abbreviations particular to D.C. such as "501 Penn Ave NW".

3. The [University of Southern California WebGIS service](http://webgis.usc.edu/Default.aspx) was used for addresses outside of D.C. (and any D.C. addresses that could not be processed using the MAR Batch Geocoder) since it returns the fully parsed address and an indication of the precision of the geocode in addition the latitude and longitude.

4. The [Principal Campaign Committees Registrant database](http://ocf.dc.gov/registration_statements/index.asp) of the Office of Campaign Finance was used to obtain more information about campaign committees, especially the type of office being sought.

5. The [Computer Assisted Mass Appraisal Database](http://otr.cfo.dc.gov/otr/cwp/view,a,1330,q,594380.asp) from the D.C. Office of Tax and Revenue was used to help determine whether a given address had multiple suites.

6. The [D.C. Department of Consumer and Regulatory Affairs](https://corp.dcra.dc.gov/Home.aspx) maintains a database of business entites registered in D.C., which was used to detect linkages between suspected puppet corporations.

The methodology for identifying puppet corporations is based on the criteria offered in this news article: [http://wamu.org/news/morning_edition/11/12/16/bundling_is_common_practice_for_dc_council_campaign_contributions](). Puppet corporations that are owned by the same person or group of people but are not located at the same business address could not be detected by this methodology.

* The corporations must be registered at the same address, including suite number if provided.

* The corporations must have contributed the maximum amount allowable under law to the same campaign, which differs depending on the electoral office.

* The corporations must have contributed to the campaign within seven days of each other. (This shows some coordination, and in fact most bundling happens on the same day. 7 days is an arbitrary number of days.)

* If the contributions from the suspected puppet corporations all came from the same suite number in an office building or came from an address that does not have multiple suites, then they are labeled as suspected puppet corporations. If the contributions came from an address that has multiple suites, but no suite number is listed in the contribution record, then the registered agent of each suspected puppet corporation must match with the registered agent of at least one other suspected puppet corporation at that address.

The registered agent of a business is not necessarily an owner of the business, but is a designated person or entity. Thus, the registered agent is often a lawyer or a registered agent service company. Even if the registered agent is not an owner, however, companies owned by the same person(s) are likely to have the same registered agent, therefore this information can be useful in detecting puppet corporations.

Campaign committee registration data from the Office of Campaign Finance was not available for committees that were formed for election cycles before 2002. Therefore, the necessary information about the office sought by the candidate was not available to detect puppet corporations for election cycles before 2002.

### Learn More

View our source code, scrapers and parsing scripts on [GitHub](https://github.com/occupydata/dc-campaign-finance). A complete [data dictionary](https://commondatastorage.googleapis.com/ckannet-storage/2012-05-29T122112/Data_Dictionary_for_Washington_DC_Local_Campaign_Contributions.pdf) documenting our processes, plus cleaned and merged data sets (including a curated version for journalists, with only relevant columns included) are availabe at [The Data Hub](http://thedatahub.org/dataset/washington-dc-local-campaign-contributions).