import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ToDoService {

  metaData: any = {
    'all_repList': {
      'a_4': {
        'value': '4',
        'text': 'Sales Screen',
        'type': 'A'
      },
      'a_67': {
        'value': '67',
        'text': 'Essam Sleman',
        'type': 'S'
      },
      'a_75': {
        'value': '75',
        'text': 'Ali Alsalmi',
        'type': 'R'
      },
      'a_76': {
        'value': '76',
        'text': 'Sales Screen',
        'type': 'A'
      },
      'a_77': {
        'value': '77',
        'text': 'Retention Screen',
        'type': 'R'
      },
      'a_80': {
        'value': '80',
        'text': 'Jwan Almaleki',
        'type': 'A'
      },
      'a_110': {
        'value': '110',
        'text': 'Rula Assaf',
        'type': 'R'
      },
      'a_111': {
        'value': '111',
        'text': 'Hamdan ALMAZROUI',
        'type': 'R'
      },
      'a_116': {
        'value': '116',
        'text': 'lama mousa',
        'type': 'S'
      },
      'a_117': {
        'value': '117',
        'text': 'Adam Abdullah',
        'type': 'S'
      },
      'a_118': {
        'value': '118',
        'text': 'Samah  Khaled',
        'type': 'A'
      },
      'a_119': {
        'value': '119',
        'text': 'Qusai da',
        'type': 'A'
      },
      'a_120': {
        'value': '120',
        'text': 'Reem Husseiny',
        'type': 'S'
      },
      'a_123': {
        'value': '123',
        'text': 'Hoda Alabdi',
        'type': 'A'
      },
      'a_124': {
        'value': '124',
        'text': 'Ehab Nsraldeen',
        'type': 'S'
      },
      'a_125': {
        'value': '125',
        'text': 'ahmad albakri',
        'type': 'S'
      },
      'a_126': {
        'value': '126',
        'text': 'Sarah Mohammad',
        'type': 'R'
      },
      'a_131': {
        'value': '131',
        'text': 'Amir Ziedan',
        'type': 'A'
      },
      'a_133': {
        'value': '133',
        'text': 'Mohamed alhagri',
        'type': 'A'
      },
      'a_136': {
        'value': '136',
        'text': 'Riyad Alali',
        'type': 'S'
      },
      'a_138': {
        'value': '138',
        'text': 'Amin Alshiekh',
        'type': 'R'
      },
      'a_139': {
        'value': '139',
        'text': 'Raya Alhashimi',
        'type': 'A'
      },
      'a_140': {
        'value': '140',
        'text': 'Zena Ali Alabdulla',
        'type': 'S'
      },
      'a_141': {
        'value': '141',
        'text': 'Abed Alsamad Zaied',
        'type': 'S'
      },
      'a_142': {
        'value': '142',
        'text': 'Aya Alfesal',
        'type': 'S'
      },
      'a_143': {
        'value': '143',
        'text': 'Mervat Zayed',
        'type': 'S'
      },
      'a_144': {
        'value': '144',
        'text': 'Noora Sanad Mohammad',
        'type': 'S'
      },
      'a_145': {
        'value': '145',
        'text': 'Qusai Ali',
        'type': 'A'
      },
      'a_146': {
        'value': '146',
        'text': 'Zena Mohamad',
        'type': 'S'
      },
      'a_147': {
        'value': '147',
        'text': 'Adi Abadi',
        'type': 'S'
      },
      'a_148': {
        'value': '148',
        'text': 'Mohammad Al ali',
        'type': 'R'
      },
      'a_149': {
        'value': '149',
        'text': 'Alanoud ALshamsi',
        'type': 'R'
      },
      'a_150': {
        'value': '150',
        'text': 'Salma abdelnour ',
        'type': 'S'
      }
    },
    'repList': [
      {
        'value': '1',
        'text': 'System Admin',
        'type': 'S',
        'targeting': 'None',
        'editable': '0'
      },
      {
        'value': '2',
        'text': 'Default Owner',
        'type': 'S',
        'targeting': 'None',
        'editable': '0'
      },
      {
        'value': '3',
        'text': 'Removed Owner',
        'type': 'S',
        'targeting': 'None',
        'editable': '0'
      },
      {
        'value': '67',
        'text': 'Essam Sleman',
        'type': 'S',
        'targeting': 'None',
        'editable': '1'
      },
      {
        'value': '70',
        'text': 'Zein  Aldeen Al-Husseiny',
        'type': 'M',
        'targeting': 'None',
        'editable': '0'
      },
      {
        'value': '75',
        'text': 'Ali Alsalmi',
        'type': 'R',
        'targeting': 'Retention',
        'editable': '1'
      },
      {
        'value': '81',
        'text': 'Noura Mohammed',
        'type': 'S',
        'targeting': 'Sales',
        'editable': '0'
      },
      {
        'value': '88',
        'text': 'Qusai ali',
        'type': 'R',
        'targeting': 'Retention',
        'editable': '0'
      },
      {
        'value': '101',
        'text': 'Reem Kilany',
        'type': 'S',
        'targeting': 'Sales',
        'editable': '0'
      },
      {
        'value': '104',
        'text': 'Zena Mohamad',
        'type': 'S',
        'targeting': 'Sales',
        'editable': '0'
      },
      {
        'value': '105',
        'text': 'Wasim  Sultan',
        'type': 'S',
        'targeting': 'Sales',
        'editable': '0'
      },
      {
        'value': '107',
        'text': 'Odai Almaliki',
        'type': 'S',
        'targeting': 'Sales',
        'editable': '0'
      },
      {
        'value': '110',
        'text': 'Rula Assaf',
        'type': 'R',
        'targeting': 'Retention',
        'editable': '1'
      },
      {
        'value': '111',
        'text': 'Hamdan ALMAZROUI',
        'type': 'R',
        'targeting': 'Retention',
        'editable': '1'
      },
      {
        'value': '114',
        'text': 'aya alomari',
        'type': 'S',
        'targeting': 'Sales',
        'editable': '0'
      },
      {
        'value': '116',
        'text': 'lama mousa',
        'type': 'S',
        'targeting': 'Sales',
        'editable': '1'
      },
      {
        'value': '117',
        'text': 'Adam Abdullah',
        'type': 'S',
        'targeting': 'Sales',
        'editable': '1'
      },
      {
        'value': '120',
        'text': 'Reem Husseiny',
        'type': 'S',
        'targeting': 'Sales',
        'editable': '1'
      },
      {
        'value': '124',
        'text': 'Ehab Nsraldeen',
        'type': 'S',
        'targeting': 'Sales',
        'editable': '1'
      },
      {
        'value': '125',
        'text': 'ahmad albakri',
        'type': 'S',
        'targeting': 'Sales',
        'editable': '1'
      },
      {
        'value': '126',
        'text': 'Sarah Mohammad',
        'type': 'R',
        'targeting': 'Retention',
        'editable': '1'
      },
      {
        'value': '136',
        'text': 'Riyad Alali',
        'type': 'S',
        'targeting': 'None',
        'editable': '1'
      },
      {
        'value': '138',
        'text': 'Amin Alshiekh',
        'type': 'R',
        'targeting': 'Retention',
        'editable': '1'
      },
      {
        'value': '140',
        'text': 'Zena Ali Alabdulla',
        'type': 'S',
        'targeting': 'Sales',
        'editable': '1'
      },
      {
        'value': '141',
        'text': 'Abed Alsamad Zaied',
        'type': 'S',
        'targeting': 'Sales',
        'editable': '1'
      },
      {
        'value': '142',
        'text': 'Aya Alfesal',
        'type': 'S',
        'targeting': 'Sales',
        'editable': '1'
      },
      {
        'value': '143',
        'text': 'Mervat Zayed',
        'type': 'S',
        'targeting': '',
        'editable': '1'
      },
      {
        'value': '144',
        'text': 'Noora Sanad Mohammad',
        'type': 'S',
        'targeting': 'Sales',
        'editable': '1'
      },
      {
        'value': '146',
        'text': 'Zena Mohamad',
        'type': 'S',
        'targeting': 'Sales',
        'editable': '1'
      },
      {
        'value': '147',
        'text': 'Adi Abadi',
        'type': 'S',
        'targeting': 'Sales',
        'editable': '1'
      },
      {
        'value': '148',
        'text': 'Mohammad Al ali',
        'type': 'R',
        'targeting': 'Retention',
        'editable': '1'
      },
      {
        'value': '149',
        'text': 'Alanoud ALshamsi',
        'type': 'R',
        'targeting': 'Retention',
        'editable': '1'
      },
      {
        'value': '150',
        'text': 'Salma abdelnour ',
        'type': 'S',
        'targeting': 'Sales',
        'editable': '1'
      }
    ],
    'countries': [
      {
        'value': 'AF',
        'text': 'Afghanistan'
      },
      {
        'value': 'AX',
        'text': 'Aland Islands'
      },
      {
        'value': 'AL',
        'text': 'Albania'
      },
      {
        'value': 'DZ',
        'text': 'Algeria'
      },
      {
        'value': 'AS',
        'text': 'American Samoa'
      },
      {
        'value': 'AD',
        'text': 'Andorra'
      },
      {
        'value': 'AO',
        'text': 'Angola'
      },
      {
        'value': 'AI',
        'text': 'Anguilla'
      },
      {
        'value': 'AQ',
        'text': 'Antarctica'
      },
      {
        'value': 'AG',
        'text': 'Antigua And Barbuda'
      },
      {
        'value': 'AR',
        'text': 'Argentina'
      },
      {
        'value': 'AM',
        'text': 'Armenia'
      },
      {
        'value': 'AW',
        'text': 'Aruba'
      },
      {
        'value': 'AU',
        'text': 'Australia'
      },
      {
        'value': 'AT',
        'text': 'Austria'
      },
      {
        'value': 'AZ',
        'text': 'Azerbaijan'
      },
      {
        'value': 'BS',
        'text': 'Bahamas'
      },
      {
        'value': 'BH',
        'text': 'Bahrain'
      },
      {
        'value': 'BD',
        'text': 'Bangladesh'
      },
      {
        'value': 'BB',
        'text': 'Barbados'
      },
      {
        'value': 'BY',
        'text': 'Belarus'
      },
      {
        'value': 'BE',
        'text': 'Belgium'
      },
      {
        'value': 'BZ',
        'text': 'Belize'
      },
      {
        'value': 'BJ',
        'text': 'Benin'
      },
      {
        'value': 'BM',
        'text': 'Bermuda'
      },
      {
        'value': 'BT',
        'text': 'Bhutan'
      },
      {
        'value': 'BO',
        'text': 'Bolivia'
      },
      {
        'value': 'BA',
        'text': 'Bosnia And Herzegovina'
      },
      {
        'value': 'BW',
        'text': 'Botswana'
      },
      {
        'value': 'BV',
        'text': 'Bouvet Island'
      },
      {
        'value': 'BR',
        'text': 'Brazil'
      },
      {
        'value': 'IO',
        'text': 'British Indian Ocean Territory'
      },
      {
        'value': 'BN',
        'text': 'Brunei Darussalam'
      },
      {
        'value': 'BG',
        'text': 'Bulgaria'
      },
      {
        'value': 'BF',
        'text': 'Burkina Faso'
      },
      {
        'value': 'BI',
        'text': 'Burundi'
      },
      {
        'value': 'KH',
        'text': 'Cambodia'
      },
      {
        'value': 'CM',
        'text': 'Cameroon'
      },
      {
        'value': 'CA',
        'text': 'Canada'
      },
      {
        'value': 'CV',
        'text': 'Cape Verde'
      },
      {
        'value': 'KY',
        'text': 'Cayman Islands'
      },
      {
        'value': 'CF',
        'text': 'Central African Republic'
      },
      {
        'value': 'TD',
        'text': 'Chad'
      },
      {
        'value': 'CL',
        'text': 'Chile'
      },
      {
        'value': 'CN',
        'text': 'China'
      },
      {
        'value': 'CX',
        'text': 'Christmas Island'
      },
      {
        'value': 'CC',
        'text': 'Cocos (Keeling) Islands'
      },
      {
        'value': 'CO',
        'text': 'Colombia'
      },
      {
        'value': 'KM',
        'text': 'Comoros'
      },
      {
        'value': 'CG',
        'text': 'Congo'
      },
      {
        'value': 'CD',
        'text': 'Congo  The Democratic Republic Of The'
      },
      {
        'value': 'CK',
        'text': 'Cook Islands'
      },
      {
        'value': 'CR',
        'text': 'Costa Rica'
      },
      {
        'value': 'CI',
        'text': 'Cote D\'Ivoire'
      },
      {
        'value': 'HR',
        'text': 'Croatia'
      },
      {
        'value': 'CU',
        'text': 'Cuba'
      },
      {
        'value': 'CY',
        'text': 'Cyprus'
      },
      {
        'value': 'CZ',
        'text': 'Czech Republic'
      },
      {
        'value': 'DK',
        'text': 'Denmark'
      },
      {
        'value': 'DJ',
        'text': 'Djibouti'
      },
      {
        'value': 'DM',
        'text': 'Dominica'
      },
      {
        'value': 'DO',
        'text': 'Dominican Republic'
      },
      {
        'value': 'EC',
        'text': 'Ecuador'
      },
      {
        'value': 'EG',
        'text': 'Egypt'
      },
      {
        'value': 'SV',
        'text': 'El Salvador'
      },
      {
        'value': 'GQ',
        'text': 'Equatorial Guinea'
      },
      {
        'value': 'ER',
        'text': 'Eritrea'
      },
      {
        'value': 'EE',
        'text': 'Estonia'
      },
      {
        'value': 'ET',
        'text': 'Ethiopia'
      },
      {
        'value': 'FK',
        'text': 'Falkland Islands (Malvinas)'
      },
      {
        'value': 'FO',
        'text': 'Faroe Islands'
      },
      {
        'value': 'FJ',
        'text': 'Fiji'
      },
      {
        'value': 'FI',
        'text': 'Finland'
      },
      {
        'value': 'FR',
        'text': 'France'
      },
      {
        'value': 'GF',
        'text': 'French Guiana'
      },
      {
        'value': 'PF',
        'text': 'French Polynesia'
      },
      {
        'value': 'TF',
        'text': 'French Southern Territories'
      },
      {
        'value': 'GA',
        'text': 'Gabon'
      },
      {
        'value': 'GM',
        'text': 'Gambia'
      },
      {
        'value': 'GE',
        'text': 'Georgia'
      },
      {
        'value': 'DE',
        'text': 'Germany'
      },
      {
        'value': 'GH',
        'text': 'Ghana'
      },
      {
        'value': 'GI',
        'text': 'Gibraltar'
      },
      {
        'value': 'GR',
        'text': 'Greece'
      },
      {
        'value': 'GL',
        'text': 'Greenland'
      },
      {
        'value': 'GD',
        'text': 'Grenada'
      },
      {
        'value': 'GP',
        'text': 'Guadeloupe'
      },
      {
        'value': 'GU',
        'text': 'Guam'
      },
      {
        'value': 'GT',
        'text': 'Guatemala'
      },
      {
        'value': 'GG',
        'text': 'Guernsey'
      },
      {
        'value': 'GN',
        'text': 'Guinea'
      },
      {
        'value': 'GW',
        'text': 'Guinea-Bissau'
      },
      {
        'value': 'GY',
        'text': 'Guyana'
      },
      {
        'value': 'HT',
        'text': 'Haiti'
      },
      {
        'value': 'HM',
        'text': 'Heard Island And Mcdonald Islands'
      },
      {
        'value': 'VA',
        'text': 'Holy See (Vatican City State)'
      },
      {
        'value': 'HN',
        'text': 'Honduras'
      },
      {
        'value': 'HK',
        'text': 'Hong Kong'
      },
      {
        'value': 'HU',
        'text': 'Hungary'
      },
      {
        'value': 'IS',
        'text': 'Iceland'
      },
      {
        'value': 'IN',
        'text': 'India'
      },
      {
        'value': 'ID',
        'text': 'Indonesia'
      },
      {
        'value': 'IR',
        'text': 'Iran  Islamic Republic Of'
      },
      {
        'value': 'IQ',
        'text': 'Iraq'
      },
      {
        'value': 'IE',
        'text': 'Ireland'
      },
      {
        'value': 'IM',
        'text': 'Isle Of Man'
      },
      {
        'value': 'IL',
        'text': 'Israel'
      },
      {
        'value': 'IT',
        'text': 'Italy'
      },
      {
        'value': 'JM',
        'text': 'Jamaica'
      },
      {
        'value': 'JP',
        'text': 'Japan'
      },
      {
        'value': 'JE',
        'text': 'Jersey'
      },
      {
        'value': 'JO',
        'text': 'Jordan'
      },
      {
        'value': 'KZ',
        'text': 'Kazakhstan'
      },
      {
        'value': 'KE',
        'text': 'Kenya'
      },
      {
        'value': 'KI',
        'text': 'Kiribati'
      },
      {
        'value': 'KP',
        'text': 'Korea  Democratic People\'S Republic Of'
      },
      {
        'value': 'KR',
        'text': 'Korea  Republic Of'
      },
      {
        'value': 'KW',
        'text': 'Kuwait'
      },
      {
        'value': 'KG',
        'text': 'Kyrgyzstan'
      },
      {
        'value': 'LA',
        'text': 'Lao People\'S Democratic Republic'
      },
      {
        'value': 'LV',
        'text': 'Latvia'
      },
      {
        'value': 'LB',
        'text': 'Lebanon'
      },
      {
        'value': 'LS',
        'text': 'Lesotho'
      },
      {
        'value': 'LR',
        'text': 'Liberia'
      },
      {
        'value': 'LY',
        'text': 'Libyan Arab Jamahiriya'
      },
      {
        'value': 'LI',
        'text': 'Liechtenstein'
      },
      {
        'value': 'LT',
        'text': 'Lithuania'
      },
      {
        'value': 'LU',
        'text': 'Luxembourg'
      },
      {
        'value': 'MO',
        'text': 'Macao'
      },
      {
        'value': 'MK',
        'text': 'Macedonia  The Former Yugoslav Republic Of'
      },
      {
        'value': 'MG',
        'text': 'Madagascar'
      },
      {
        'value': 'MW',
        'text': 'Malawi'
      },
      {
        'value': 'MY',
        'text': 'Malaysia'
      },
      {
        'value': 'MV',
        'text': 'Maldives'
      },
      {
        'value': 'ML',
        'text': 'Mali'
      },
      {
        'value': 'MT',
        'text': 'Malta'
      },
      {
        'value': 'MH',
        'text': 'Marshall Islands'
      },
      {
        'value': 'MQ',
        'text': 'Martinique'
      },
      {
        'value': 'MR',
        'text': 'Mauritania'
      },
      {
        'value': 'MU',
        'text': 'Mauritius'
      },
      {
        'value': 'YT',
        'text': 'Mayotte'
      },
      {
        'value': 'MX',
        'text': 'Mexico'
      },
      {
        'value': 'FM',
        'text': 'Micronesia  Federated States Of'
      },
      {
        'value': 'MD',
        'text': 'Moldova  Republic Of'
      },
      {
        'value': 'MC',
        'text': 'Monaco'
      },
      {
        'value': 'MN',
        'text': 'Mongolia'
      },
      {
        'value': 'MS',
        'text': 'Montserrat'
      },
      {
        'value': 'MA',
        'text': 'Morocco'
      },
      {
        'value': 'MZ',
        'text': 'Mozambique'
      },
      {
        'value': 'MM',
        'text': 'Myanmar'
      },
      {
        'value': 'NA',
        'text': 'Namibia'
      },
      {
        'value': 'NR',
        'text': 'Nauru'
      },
      {
        'value': 'NP',
        'text': 'Nepal'
      },
      {
        'value': 'NL',
        'text': 'Netherlands'
      },
      {
        'value': 'AN',
        'text': 'Netherlands Antilles'
      },
      {
        'value': 'NC',
        'text': 'New Caledonia'
      },
      {
        'value': 'NZ',
        'text': 'New Zealand'
      },
      {
        'value': 'NI',
        'text': 'Nicaragua'
      },
      {
        'value': 'NE',
        'text': 'Niger'
      },
      {
        'value': 'NG',
        'text': 'Nigeria'
      },
      {
        'value': 'NU',
        'text': 'Niue'
      },
      {
        'value': 'NF',
        'text': 'Norfolk Island'
      },
      {
        'value': 'MP',
        'text': 'Northern Mariana Islands'
      },
      {
        'value': 'NO',
        'text': 'Norway'
      },
      {
        'value': 'OM',
        'text': 'Oman'
      },
      {
        'value': 'PK',
        'text': 'Pakistan'
      },
      {
        'value': 'PW',
        'text': 'Palau'
      },
      {
        'value': 'PS',
        'text': 'Palestinian Territory  Occupied'
      },
      {
        'value': 'PA',
        'text': 'Panama'
      },
      {
        'value': 'PG',
        'text': 'Papua New Guinea'
      },
      {
        'value': 'PY',
        'text': 'Paraguay'
      },
      {
        'value': 'PE',
        'text': 'Peru'
      },
      {
        'value': 'PH',
        'text': 'Philippines'
      },
      {
        'value': 'PN',
        'text': 'Pitcairn'
      },
      {
        'value': 'PL',
        'text': 'Poland'
      },
      {
        'value': 'PT',
        'text': 'Portugal'
      },
      {
        'value': 'PR',
        'text': 'Puerto Rico'
      },
      {
        'value': 'QA',
        'text': 'Qatar'
      },
      {
        'value': 'RE',
        'text': 'Reunion'
      },
      {
        'value': 'RO',
        'text': 'Romania'
      },
      {
        'value': 'RU',
        'text': 'Russian Federation'
      },
      {
        'value': 'RW',
        'text': 'Rwanda'
      },
      {
        'value': 'SH',
        'text': 'Saint Helena'
      },
      {
        'value': 'KN',
        'text': 'Saint Kitts And Nevis'
      },
      {
        'value': 'LC',
        'text': 'Saint Lucia'
      },
      {
        'value': 'PM',
        'text': 'Saint Pierre And Miquelon'
      },
      {
        'value': 'VC',
        'text': 'Saint Vincent And The Grenadines'
      },
      {
        'value': 'WS',
        'text': 'Samoa'
      },
      {
        'value': 'SM',
        'text': 'San Marino'
      },
      {
        'value': 'ST',
        'text': 'Sao Tome And Principe'
      },
      {
        'value': 'SA',
        'text': 'Saudi Arabia'
      },
      {
        'value': 'SN',
        'text': 'Senegal'
      },
      {
        'value': 'CS',
        'text': 'Serbia And Montenegro'
      },
      {
        'value': 'SC',
        'text': 'Seychelles'
      },
      {
        'value': 'SL',
        'text': 'Sierra Leone'
      },
      {
        'value': 'SG',
        'text': 'Singapore'
      },
      {
        'value': 'SK',
        'text': 'Slovakia'
      },
      {
        'value': 'SI',
        'text': 'Slovenia'
      },
      {
        'value': 'SB',
        'text': 'Solomon Islands'
      },
      {
        'value': 'SO',
        'text': 'Somalia'
      },
      {
        'value': 'ZA',
        'text': 'South Africa'
      },
      {
        'value': 'GS',
        'text': 'South Georgia And The South Sandwich Islands'
      },
      {
        'value': 'ES',
        'text': 'Spain'
      },
      {
        'value': 'LK',
        'text': 'Sri Lanka'
      },
      {
        'value': 'SD',
        'text': 'Sudan'
      },
      {
        'value': 'SR',
        'text': 'Suriname'
      },
      {
        'value': 'SJ',
        'text': 'Svalbard And Jan Mayen'
      },
      {
        'value': 'SZ',
        'text': 'Swaziland'
      },
      {
        'value': 'SE',
        'text': 'Sweden'
      },
      {
        'value': 'CH',
        'text': 'Switzerland'
      },
      {
        'value': 'SY',
        'text': 'Syrian Arab Republic'
      },
      {
        'value': 'TW',
        'text': 'Taiwan  Province Of China'
      },
      {
        'value': 'TJ',
        'text': 'Tajikistan'
      },
      {
        'value': 'TZ',
        'text': 'Tanzania  United Republic Of'
      },
      {
        'value': 'TH',
        'text': 'Thailand'
      },
      {
        'value': 'TL',
        'text': 'Timor-Leste'
      },
      {
        'value': 'TG',
        'text': 'Togo'
      },
      {
        'value': 'TK',
        'text': 'Tokelau'
      },
      {
        'value': 'TO',
        'text': 'Tonga'
      },
      {
        'value': 'TT',
        'text': 'Trinidad And Tobago'
      },
      {
        'value': 'TN',
        'text': 'Tunisia'
      },
      {
        'value': 'TR',
        'text': 'Turkey'
      },
      {
        'value': 'TM',
        'text': 'Turkmenistan'
      },
      {
        'value': 'TC',
        'text': 'Turks And Caicos Islands'
      },
      {
        'value': 'TV',
        'text': 'Tuvalu'
      },
      {
        'value': 'UG',
        'text': 'Uganda'
      },
      {
        'value': 'UA',
        'text': 'Ukraine'
      },
      {
        'value': 'AE',
        'text': 'United Arab Emirates'
      },
      {
        'value': 'GB',
        'text': 'United Kingdom'
      },
      {
        'value': 'US',
        'text': 'United States'
      },
      {
        'value': 'UM',
        'text': 'United States Minor Outlying Islands'
      },
      {
        'value': 'UY',
        'text': 'Uruguay'
      },
      {
        'value': 'UZ',
        'text': 'Uzbekistan'
      },
      {
        'value': 'VU',
        'text': 'Vanuatu'
      },
      {
        'value': 'VE',
        'text': 'Venezuela'
      },
      {
        'value': 'VN',
        'text': 'Viet Nam'
      },
      {
        'value': 'VG',
        'text': 'Virgin Islands  British'
      },
      {
        'value': 'VI',
        'text': 'Virgin Islands  U.S.'
      },
      {
        'value': 'WF',
        'text': 'Wallis And Futuna'
      },
      {
        'value': 'EH',
        'text': 'Western Sahara'
      },
      {
        'value': 'YE',
        'text': 'Yemen'
      },
      {
        'value': 'ZM',
        'text': 'Zambia'
      },
      {
        'value': 'ZW',
        'text': 'Zimbabwe'
      }
    ],
    'business_units': [
      {
        'value': '1',
        'text': 'Al Oula'
      }
    ],
    'affiliates': [
      {
        'value': '4',
        'text': 'Sales Screen',
        'type': 'A',
        'targeting': 'None',
        'editable': '1'
      },
      {
        'value': '74',
        'text': 'Iniitail List',
        'type': 'A',
        'targeting': 'None',
        'editable': '0'
      },
      {
        'value': '76',
        'text': 'Sales Screen',
        'type': 'A',
        'targeting': 'None',
        'editable': '1'
      },
      {
        'value': '79',
        'text': 'Web Site',
        'type': 'A',
        'targeting': 'None',
        'editable': '0'
      },
      {
        'value': '80',
        'text': 'Jwan Almaleki',
        'type': 'A',
        'targeting': 'None',
        'editable': '1'
      },
      {
        'value': '82',
        'text': 'List Uploader',
        'type': 'A',
        'targeting': 'None',
        'editable': '0'
      },
      {
        'value': '113',
        'text': 'beautiful beautiful',
        'type': 'A',
        'targeting': 'None',
        'editable': '0'
      },
      {
        'value': '118',
        'text': 'Samah  Khaled',
        'type': 'A',
        'targeting': 'None',
        'editable': '1'
      },
      {
        'value': '119',
        'text': 'Qusai da',
        'type': 'A',
        'targeting': 'None',
        'editable': '1'
      },
      {
        'value': '123',
        'text': 'Hoda Alabdi',
        'type': 'A',
        'targeting': 'None',
        'editable': '1'
      },
      {
        'value': '131',
        'text': 'Amir Ziedan',
        'type': 'A',
        'targeting': 'None',
        'editable': '1'
      },
      {
        'value': '133',
        'text': 'Mohamed alhagri',
        'type': 'A',
        'targeting': 'None',
        'editable': '1'
      },
      {
        'value': '134',
        'text': 'F.F F.F',
        'type': 'A',
        'targeting': 'None',
        'editable': '1'
      },
      {
        'value': '135',
        'text': 'Beautiful (YT) Beautiful (YT)',
        'type': 'A',
        'targeting': 'None',
        'editable': '1'
      },
      {
        'value': '139',
        'text': 'Raya Alhashimi',
        'type': 'A',
        'targeting': 'None',
        'editable': '1'
      },
      {
        'value': '145',
        'text': 'Qusai Ali',
        'type': 'A',
        'targeting': 'None',
        'editable': '1'
      }
    ],
    'campaigns': [
      {
        'value': '1',
        'text': 'group_a'
      },
      {
        'value': '2',
        'text': 'group_b'
      },
      {
        'value': '3',
        'text': 'Tharwa'
      },
      {
        'value': '4',
        'text': '30 Days'
      },
      {
        'value': '5',
        'text': 'tt'
      },
      {
        'value': '6',
        'text': 'was'
      },
      {
        'value': '7',
        'text': 'إكسب برأس مال بسيط'
      },
      {
        'value': '8',
        'text': 'wasc'
      },
      {
        'value': '9',
        'text': 'LP1'
      },
      {
        'value': '10',
        'text': 'FAITH'
      },
      {
        'value': '11',
        'text': 'SAUTV'
      },
      {
        'value': '12',
        'text': 'KSAREP'
      },
      {
        'value': '13',
        'text': 'joy'
      },
      {
        'value': '14',
        'text': 'was20190121'
      },
      {
        'value': '15',
        'text': 'Aramco Stocks'
      },
      {
        'value': '16',
        'text': 'Aramco KW'
      },
      {
        'value': '17',
        'text': 'Dubai'
      },
      {
        'value': '18',
        'text': 'Currency Exchange'
      },
      {
        'value': '19',
        'text': 'Dubai Campaign'
      },
      {
        'value': '20',
        'text': 'Gold Campaign'
      },
      {
        'value': '21',
        'text': 'Specific Currency Exchange'
      },
      {
        'value': '22',
        'text': 'Forex Exchange'
      },
      {
        'value': '23',
        'text': 'Gold Trading New'
      },
      {
        'value': '24',
        'text': 'Oil Prices'
      },
      {
        'value': '25',
        'text': 'General Currency Exchange'
      },
      {
        'value': '26',
        'text': 'Dubai Landing Page'
      },
      {
        'value': '27',
        'text': 'Investment properties'
      },
      {
        'value': '28',
        'text': 'Gold Campaign (NH)'
      },
      {
        'value': '29',
        'text': 'Bitcoin Investing'
      },
      {
        'value': '30',
        'text': 'Oil Investing'
      },
      {
        'value': '31',
        'text': 'Gold Campaign (IG)'
      },
      {
        'value': '32',
        'text': 'Gold Campaign (FB)'
      },
      {
        'value': '33',
        'text': 'Dubai Campaign SA'
      },
      {
        'value': '34',
        'text': 'Teachers Investments'
      },
      {
        'value': '35',
        'text': 'Gold Campaign (MSN)'
      },
      {
        'value': '36',
        'text': 'Gold'
      },
      {
        'value': '37',
        'text': 'Advert Incoming Call'
      },
      {
        'value': '38',
        'text': 'Aramco Stocks YT'
      },
      {
        'value': '39',
        'text': 'Aramco Stocks YT Kuwait'
      },
      {
        'value': '40',
        'text': 'Gold Campaign YT'
      },
      {
        'value': '41',
        'text': 'Aramco Stocks YT 55'
      },
      {
        'value': '42',
        'text': 'Gold Campaign 55'
      },
      {
        'value': '43',
        'text': 'Companies Stocks YT'
      },
      {
        'value': '44',
        'text': 'Dubai Campaign YT'
      },
      {
        'value': '45',
        'text': 'Oil Investment'
      },
      {
        'value': '46',
        'text': 'Digital Currencies'
      },
      {
        'value': '47',
        'text': 'Trading Success Story'
      },
      {
        'value': '48',
        'text': 'Trading Success Story Chat'
      },
      {
        'value': '49',
        'text': 'Tesla Stocks'
      },
      {
        'value': '50',
        'text': 'Gold Investing'
      }
    ],
    'statuses': [
      {
        'value': '1',
        'text': 'New',
        'row': {
          'id': '1',
          'content': 'New',
          'picklist_colors': null
        }
      },
      {
        'value': '2',
        'text': 'Not Interested',
        'row': {
          'id': '2',
          'content': 'Not Interested',
          'picklist_colors': null
        }
      },
      {
        'value': '3',
        'text': 'Wrong info',
        'row': {
          'id': '3',
          'content': 'Wrong info',
          'picklist_colors': null
        }
      },
      {
        'value': '4',
        'text': 'No Answer',
        'row': {
          'id': '4',
          'content': 'No Answer',
          'picklist_colors': null
        }
      },
      {
        'value': '5',
        'text': 'Interested',
        'row': {
          'id': '5',
          'content': 'Interested',
          'picklist_colors': null
        }
      },
      {
        'value': '6',
        'text': 'Deposit',
        'row': {
          'id': '6',
          'content': 'Deposit',
          'picklist_colors': null
        }
      },
      {
        'value': '7',
        'text': 'Do not Contact',
        'row': {
          'id': '7',
          'content': 'Do not Contact',
          'picklist_colors': null
        }
      },
      {
        'value': '8',
        'text': 'Follow up',
        'row': {
          'id': '8',
          'content': 'Follow up',
          'picklist_colors': null
        }
      },
      {
        'value': '9',
        'text': 'CC Failed',
        'row': {
          'id': '9',
          'content': 'CC Failed',
          'picklist_colors': null
        }
      },
      {
        'value': '10',
        'text': 'Trade Out',
        'row': {
          'id': '10',
          'content': 'Trade Out',
          'picklist_colors': null
        }
      },
      {
        'value': '11',
        'text': 'Call in a while',
        'row': {
          'id': '11',
          'content': 'Call in a while',
          'picklist_colors': null
        }
      },
      {
        'value': '12',
        'text': 'Under Age',
        'row': {
          'id': '12',
          'content': 'Under Age',
          'picklist_colors': null
        }
      },
      {
        'value': '13',
        'text': 'Duplicate',
        'row': {
          'id': '13',
          'content': 'Duplicate',
          'picklist_colors': null
        }
      },
      {
        'value': '14',
        'text': 'Language',
        'row': {
          'id': '14',
          'content': 'Language',
          'picklist_colors': null
        }
      },
      {
        'value': '15',
        'text': 'Reject',
        'row': {
          'id': '15',
          'content': 'Reject',
          'picklist_colors': null
        }
      },
      {
        'value': '16',
        'text': 'Long no answer',
        'row': {
          'id': '16',
          'content': 'Long no answer',
          'picklist_colors': null
        }
      },
      {
        'value': '17',
        'text': 'Off',
        'row': {
          'id': '17',
          'content': 'Off',
          'picklist_colors': null
        }
      },
      {
        'value': '18',
        'text': 'Notinterested2',
        'row': {
          'id': '18',
          'content': 'Notinterested2',
          'picklist_colors': null
        }
      },
      {
        'value': '19',
        'text': 'Renew',
        'row': {
          'id': '19',
          'content': 'Renew',
          'picklist_colors': null
        }
      },
      {
        'value': '20',
        'text': 'Other',
        'row': {
          'id': '20',
          'content': 'Other',
          'picklist_colors': null
        }
      },
      {
        'value': '21',
        'text': 'Wrong Number',
        'row': {
          'id': '21',
          'content': 'Wrong Number',
          'picklist_colors': null
        }
      },
      {
        'value': '22',
        'text': 'Not Registered',
        'row': {
          'id': '22',
          'content': 'Not Registered',
          'picklist_colors': null
        }
      },
      {
        'value': '23',
        'text': 'Deposit (RT) New',
        'row': {
          'id': '23',
          'content': 'Deposit (RT) New',
          'picklist_colors': null
        }
      }
    ]
  };

  /**
   * Todo list
   */
  toDoList: any = [
    {
      id: '36616',
      password: 'b4k9575',
      description: null,
      tal: '36616_0e47fe1ffed9adc65574d79fdef125b6',
      balance: '0.00',
      lead_status: '1',
      country_shortname: 'SA',
      firstname: 'عزيز',
      registration_date: '2020-01-14 12:15:52',
      business_unit: '1',
      limited: '0',
      trade_out_status: '0',
      rep_id: '2',
      lastname: 'عزيز',
      last_login_date: null,
      last_crm_date: null,
      email: 'nbe7eafe20b501569dcf891c608a83461@nomail.com',
      phone: '+123456789',
      phone2: null,
      affiliate_id: '113',
      affiliate_mt_id: '46',
      score: '0',
    }
  ];

  constructor() {
  }

  /**
   * Get Todo List
   */
  getToDoList() {
    return this.toDoList;
  }

  getMetaData() {
    return this.metaData;
  }

  /**
   * Set new Todo list
   * @param newList - new Todo list
   */
  setToDoList(newList) {
    this.toDoList = newList;
  }

  /**
   * Duplicate task with specific index
   * @param index : index of task to duplicate
   */
  duplicate(index) {
    const cloned = Object.assign({}, this.toDoList[index]);
    cloned.id = Date.now();
    this.toDoList.push(cloned);
  }

  /**
   * Remove task with specific index
   * @param index : index of task to remove
   */
  remove(index: number) {
    this.toDoList.splice(index, 1);
  }

  /**
   * Add task
   * @param task : task to add
   */
  addToDo(task) {
    this.toDoList.unshift(
      {
        id: Date.now(),
        title: task.title.trim(),
        completed: false,
        dueDate: task.dueDate
      });

    // to prevent showing completed tasks on top.
    this.sortToDoList();
  }

  /**
   * sort todo list , completed tasks will be moved to bottom
   **/
  sortToDoList() {
    this.toDoList.sort(function (a, b) {
      // false values first
      return (a.completed === b.completed) ? 0 : a.completed ? 1 : -1;
    });
  }
}
