import { Component } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

import { ModalAssociateUserComponent } from "../modal-associate-user/modal-associate-user.component";
import { documents, Document } from "src/app/variables/charts";
import { ModalAddDocumentComponent } from "../modal-add-document/modal-add-document.component";
import { ModalAddTaskComponent } from "../modal-add-task/modal-add-task.component";
interface User {
  id: number;
  name: string;
}

interface Tache {
  id: number;
  titre: string;
  detail: string;
  echeance?: Date;
  user?: User["id"];
  document?: Document["name"];
}

@Component({
  selector: "app-add-workflow-form",
  templateUrl: "./add-workflow-form.component.html",
  styleUrls: ["./add-workflow-form.component.scss"],
})
export class AddWorkflowFormComponent {
  statut: any;
  priorite: any;
  message: any;
  titre: any;
  echeance: any;
  addDocuments: any;
  // modal: NgbModal;
  modalRef: any;
  //encapsulation: ViewEncapsulation.None;
  //closeResult: string;

  users: User[] = [
    { id: 1, name: "zobel" },
    { id: 2, name: "concepteur JS" },
    { id: 3, name: "ulrich" },
  ];
  taches: Tache[] = [
    {
      id: 1,
      titre: "t1",
      detail: "test",
    },
    {
      id: 2,
      titre: "t2",
      detail: "test2",
    },
    {
      id: 3,
      titre: "t3",
      detail: "test3",
    },
    {
      id: 4,
      titre: "t4",
      detail: "test4",
    },
    {
      id: 5,
      titre: "t5",
      detail: "test5",
    },
  ];
  userId: User["id"];
  documents: Document[] = documents;
  constructor(private modalService: NgbModal) {}

  addDoc() {}

  openModal(test: string) {
    if (test === "user") {
      this.modalRef = this.modalService.open(ModalAssociateUserComponent);
    } else if(test=== "file") {
      this.modalRef = this.modalService.open(ModalAddDocumentComponent);
    } else if (test === "task") {
      this.modalRef = this.modalService.open(ModalAddTaskComponent);
    }


    this.modalRef.componentInstance.title = "Mon titre";
    document.querySelector<HTMLElement>(".modal-backdrop").style.zIndex = "1";
    document
      .querySelector<HTMLElement>(".modal-dialog")
      .classList.add("modal-lg", "modal-dialog-scrollable");

    this.modalRef.result.then(
      (result: any) => {
        console.log(result);
      },
      (reason: any) => {
        console.log(reason);
      }
    );
  }
}
