"""from sqlalchemy import true


countries = [ ["Afghanistan"], ["Albania"], ["Algeria"], ["Andorra"], ["Angola"], ["Antigua and Barbuda"], ["Argentina"], ["Armenia"], ["Australia"], ["Austria"], ["Azerbaijan"], 
	["The Bahamas","Bahamas"], ["Bahrain"], ["Bangladesh"], ["Barbados"], ["Belarus"], ["Belgium"], ["Belize"], ["Benin"], ["Bhutan"], ["Bolivia"], ["Bosnia and Herzegovina"], ["Botswana"], ["Brazil"], ["Brunei"], ["Bulgaria"], ["Burkina Faso"], ["Burundi"], 
	["Cabo Verde","Cape Verde"], ["Cambodia"], ["Cameroon"], ["Canada"], ["Central African Republic","Central Africa","CAR"], ["Chad"], ["Chile"], ["China", "PRC"], ["Colombia"], ["Comoros"], ["Democratic Republic of the Congo","DRC"], ["Republic of the Congo","Congo"], ["Costa Rica"], ["Cote d'Ivoire","Ivory Coast"], ["Croatia"], ["Cuba"], ["Cyprus"], ["Czech Republic","Czechia"], 
	["Denmark"], ["Djibouti"], ["Dominica"], ["Dominican Republic"], 
	["Ecuador"], ["Egypt"], ["El Salvador"], ["Equatorial Guinea"], ["Eritrea"], ["Estonia"], ["Eswatini"], ["Ethiopia"], 
	["Fiji"], ["Finland"], ["France"], 
	["Gabon"], ["The Gambia","Gambia"], ["Georgia"], ["Germany"], ["Ghana"], ["Greece"], ["Grenada"], ["Guatemala"], ["Guinea"], ["Guinea-Bissau"], ["Guyana"], 
	["Haiti"], ["Honduras"], ["Hungary"], 
	["Iceland"], ["India"], ["Indonesia"], ["Iran"], ["Iraq"], ["Ireland"], ["Israel"], ["Italy"], 
	["Jamaica"], ["Japan"], ["Jordan"], 
	["Kazakhstan"], ["Kenya"], ["Kiribati"], ["Kuwait"], ["Kyrgyzstan"], 
	["Laos"], ["Latvia"], ["Lebanon"], ["Lesotho"], ["Liberia"], ["Libya"], ["Liechtenstein"], ["Lithuania"], ["Luxembourg"], 
	["Madagascar"], ["Malawi"], ["Malaysia"], ["Maldives"], ["Mali"], ["Malta"], ["Marshall Islands"], ["Mauritania"], ["Mauritius"], ["Mexico"], ["Federated States of Micronesia","Micronesia"], ["Moldova"], ["Monaco"], ["Mongolia"], ["Montenegro"], ["Morocco"], ["Mozambique"], ["Myanmar"], 
	["Namibia"], ["Nauru"], ["Nepal"], ["Netherlands"], ["New Zealand"], ["Nicaragua"], ["Niger"], ["Nigeria"], ["North Korea", "DPRK"], ["North Macedonia"], ["Norway"], 
	["Oman"], 
	["Pakistan"], ["Palau"], ["Palestine"], ["Panama"], ["Papua New Guinea"], ["Paraguay"], ["Peru"], ["Philippines"], ["Poland"], ["Portugal"], 
	["Qatar"], 
	["Romania"], ["Russian Federation", "Russia", "RF"], ["Rwanda"], 
	["Saint Kitts and Nevis", "St. Kitts and Nevis"], ["Saint Lucia", "St. Lucia"], ["Saint Vincent and the Grenadines", "St. Vincent and the Grenadines"], ["Samoa"], ["San Marino"], ["Sao Tome and Principe"], ["Saudi Arabia","KSA"], ["Senegal"], ["Serbia"],
	["Seychelles"], ["Sierra Leone"], ["Singapore"], ["Slovakia"], ["Slovenia"], ["Solomon Islands"], ["Somalia"], ["South Africa","SAR"], ["South Korea"], ["South Sudan"], ["Spain"], ["Sri Lanka"], ["Sudan"], ["Suriname"], ["Sweden"], ["Switzerland"], ["Syria"], 
	["Tajikistan"], ["Tanzania"], ["Thailand"], ["Timor-Leste","East Timor"], ["Togo"], ["Tonga"], ["Trinidad and Tobago"], ["Tunisia"], ["Turkey","Turkiye"], ["Turkmenistan"], ["Tuvalu"], 
	["Uganda"], ["Ukraine"], ["United Arab Emirates","UAE"], ["United Kingdom","UK"], ["United States of America","USA","US"], ["Uruguay"], ["Uzbekistan"], 
	["Vanuatu"], ["Vatican City","Vatican"], ["Venezuela"], ["Vietnam"], 
	["Yemen"], 
	["Zambia"], ["Zimbabwe"]]
toreturn = []

for i in countries:
  toreturn.append(["countryShapes/"+(i[0].lower().replace(" ", "").replace("'", "").replace(".", "").replace("-", ""))+".png"])
print(toreturn)
"""
toreturn = []
while True:
	uinput = input()
	if uinput == 'x':
		break
	toreturn.append([uinput[0].upper() + uinput[1:]])
print(toreturn)

continent = [['Asia'], ['Europe'], ['Africa'], ['Europe'], ['Africa'], ['North america'], ['South america'], ['Asia'], ['Oceania'], ['Europe'], ['Asia'], ['North america'], ['Asia'], ['Asia'], ['North america'], ['Europe'], ['Europe'], ['North america'], ['Africa'], ['Asia'], ['South america'], ['Europe'], ['Africa'], ['South america'], ['Asia'], ['Europe'], ['Africa'], ['Africa'], ['Africa'], ['Asia'], ['Africa'], ['North america'], ['Africa'], ['Africa'], ['South america'], ['Asia'], ['South america'], ['Africa'], ['Africa'], ['Africa'], ['South africa'], ['Africa'], ['Europe'], ['North america'], ['Europe'], ['Europe'], ['Europe'], ['Africa'], ['North america'], ['North america'], ['South america'], ['Africa'], ['North america'], ['Africa'], ['Africa'], ['Europe'], ['Africa'], ['Africa']]

