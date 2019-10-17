import { ICompany, IUser } from '@sws/api-interfaces';
import { Project } from '../models/project.model';

export class Company {
  private _id: number;
  private _name: string;
  private _domain: string;
  private _description: string;
  private _users: IUser[]
  private _projects: Project[]
  private _updatedAt?: Date;
  private _createdAt?: Date;


  constructor(id: number, name: string, domain: string, description: string) {
    this._id = id;
    this._name = name;
    this._domain = domain;
    this._description = description;
  }
  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }


  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
 * Getter description
 * @return {string}
 */
  public get domain(): string {
    return this._domain;
  }

  /**
   * Setter domain
   * @param {string} value
   */
  public set domain(value: string) {
    this._domain = value;
  }

}
