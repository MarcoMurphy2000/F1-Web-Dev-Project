import { Injectable } from '@angular/core';
import {catchError, of, retry, Subject, take} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SeasonsResponse} from '../models/season';
import {RoundsResponse} from '../models/round';
import {ResultResponse} from '../models/result';
import {countries} from '../util/country-code';
import {DriverResponse} from '../models/driver';


export interface RaceDetails {
  roundNumber: string;
  raceName: string;
}

export interface ResultDetails {
  position: string;
  givenName: string;
  familyName: string;
  nationality: string;
  time: string;
  points: string;
}

export interface PodiumDetails {
  permanentNumber: string;
  givenName: string;
  familyName: string;
}

export interface WikiResponse {
  batchcomplete: string;
  query: {
    pages: {
      [key: string]: {
        pageid: number;
        ns: number;
        title: string;
        thumbnail?: {
          source: string;
          width: number;
          height: number;
        };
        pageimage?: string;
        extract?: string;
      };
    };
  };
}

@Injectable({
  providedIn: 'root'
})

export class F1ServiceService {
  seasons$ = new Subject<string[]>()
  public Year: string = '';
  public Round: string = '';
  public RoundName: string = '';

  public rounds: RaceDetails[] = [];
  public results: ResultDetails[] = [];
  public podium: PodiumDetails[] = [];

  api_url = 'https://ergast.com/api/f1/';
  corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

  rounds$ = new Subject<RaceDetails[]>();
  results$ = new Subject<ResultDetails[]>();
  podium$ = new Subject<PodiumDetails[]>();

  constructor(private http: HttpClient) {
  }


  getSeasons() {
    this.http.get<SeasonsResponse>('https://ergast.com/api/f1/seasons.json?limit=100')
      .pipe(
        retry(2),
        take(1),
        catchError(err => {
            console.error(err);
            return of(
              {
                "MRData": {
                  "xmlns": "http:\/\/ergast.com\/mrd\/1.5",
                  "series": "f1",
                  "url": "http://ergast.com/api/f1/seasons.json",
                  "limit": "30",
                  "offset": "0",
                  "total": "75",
                  "SeasonTable": {
                    "Seasons": [{
                      "season": "1950",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1950_Formula_One_season"
                    }, {
                      "season": "1951",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1951_Formula_One_season"
                    }, {
                      "season": "1952",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1952_Formula_One_season"
                    }, {
                      "season": "1953",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1953_Formula_One_season"
                    }, {
                      "season": "1954",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1954_Formula_One_season"
                    }, {
                      "season": "1955",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1955_Formula_One_season"
                    }, {
                      "season": "1956",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1956_Formula_One_season"
                    }, {
                      "season": "1957",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1957_Formula_One_season"
                    }, {
                      "season": "1958",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1958_Formula_One_season"
                    }, {
                      "season": "1959",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1959_Formula_One_season"
                    }, {
                      "season": "1960",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1960_Formula_One_season"
                    }, {
                      "season": "1961",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1961_Formula_One_season"
                    }, {
                      "season": "1962",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1962_Formula_One_season"
                    }, {
                      "season": "1963",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1963_Formula_One_season"
                    }, {
                      "season": "1964",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1964_Formula_One_season"
                    }, {
                      "season": "1965",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1965_Formula_One_season"
                    }, {
                      "season": "1966",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1966_Formula_One_season"
                    }, {
                      "season": "1967",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1967_Formula_One_season"
                    }, {
                      "season": "1968",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1968_Formula_One_season"
                    }, {
                      "season": "1969",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1969_Formula_One_season"
                    }, {
                      "season": "1970",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1970_Formula_One_season"
                    }, {
                      "season": "1971",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1971_Formula_One_season"
                    }, {
                      "season": "1972",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1972_Formula_One_season"
                    }, {
                      "season": "1973",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1973_Formula_One_season"
                    }, {
                      "season": "1974",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1974_Formula_One_season"
                    }, {
                      "season": "1975",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1975_Formula_One_season"
                    }, {
                      "season": "1976",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1976_Formula_One_season"
                    }, {
                      "season": "1977",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1977_Formula_One_season"
                    }, {
                      "season": "1978",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1978_Formula_One_season"
                    }, {
                      "season": "1979",
                      "url": "http:\/\/en.wikipedia.org\/wiki\/1979_Formula_One_season"
                    }]
                  }
                }
              }
            )
          }
        ))
      .subscribe((response) => {
        const seasons = response.MRData.SeasonTable.Seasons.map(seasonObj => seasonObj.season);
        this.seasons$.next(seasons);
      });
  }

  getRounds() {
    this.http.get<RoundsResponse>(`${this.api_url}${this.Year}.json`)
      .pipe(retry(2), take(1))
      .subscribe(result => {
        this.rounds = result.MRData.RaceTable.Races.map(race => ({
          roundNumber: race.round,
          raceName: race.raceName
        }))
        this.rounds$.next(this.rounds);
        console.log(this.rounds);
      });
  }

  getResults() {
    this.http.get<ResultResponse>(`${this.api_url}${this.Year}/${this.Round}/results.json`)
      .pipe(retry(2), take(1))
      .subscribe(result => {
        if (result.MRData.RaceTable.Races.length > 0) {
          this.results = result.MRData.RaceTable.Races[0].Results.map(result => ({
            position: result.position,
            familyName: result.Driver.familyName,
            givenName: result.Driver.givenName,
            nationality: countries.get(result.Driver.nationality) ?? 'Unknown Country',
            time: result.Time?.time || 'N/A',
            points: result.points,
          }))
          this.results$.next(this.results);
          console.log(this.results);
        }
      });
  }

  getPodium() {
    this.http.get<ResultResponse>(`${this.api_url}${this.Year}/${this.Round}/results.json`)
      .pipe(retry(2), take(1))
      .subscribe(result => {
        if (result.MRData.RaceTable.Races.length > 0) {
          this.podium = result.MRData.RaceTable.Races[0].Results.map(result => ({
            permanentNumber: result?.Driver.permanentNumber || 'N/A',
            givenName: result.Driver.givenName,
            familyName: result.Driver.familyName
          }))
          this.podium$.next(this.podium);
          console.log(this.podium);
        }
      });
  }

  getWinnerPicture(title: string) {
    return this.http.get<WikiResponse>(`${(this.corsAnywhereUrl)}https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${title}&prop=pageimages&pithumbsize=100&pilicense=any`)
  }

  getWinnerDetails(title: string) {
    return this.http.get<WikiResponse>(`${(this.corsAnywhereUrl)}https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=extracts&exintro&explaintext&format=json`)
  }
}

