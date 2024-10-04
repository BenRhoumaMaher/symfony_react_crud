<?php

namespace App\Controller;

use App\Entity\Employee;
use App\Repository\EmployeeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api', name: 'api_')]
class EmployeeController extends AbstractController
{
    #[Route('/employee', name: 'app_employee', methods:'GET')]
    public function index(EmployeeRepository $employeeRepository): Response
    {
        $employees = $employeeRepository->findAll();
        $data = [];
        foreach ($employees as $employee) {
            $data[] = [
                'id' => $employee->getId(),
                'fullname' => $employee->getfullName(),
                'email' => $employee->getEmail(),
                'password' => $employee->getPassword(),
                'degree' => $employee->getDegree(),
                'designation' => $employee->getDesignation(),
                'address' => $employee->getAddress(),
                'contact' => $employee->getContact()
            ];
        }
        return $this->json($data);
    }
    #[Route('/employee', name: 'add_employee', methods:'POST')]
    public function addEmployee(
        EntityManagerInterface $entityManager,
        Request $request,
        ValidatorInterface $validator
    ) {
        $employee = new Employee();
        $employee->setFullname($request->request->get('fullname'));
        $employee->setEmail($request->request->get('email'));
        $employee->setPassword($request->request->get('password'));
        $employee->setDegree($request->request->get('degree'));
        $employee->setDesignation($request->request->get('designation'));
        $employee->setAddress($request->request->get('address'));
        $employee->setContact($request->request->get('contact'));
        $errors = $validator->validate($employee);
        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }
            return new JsonResponse(
                ['errors' => $errorMessages],
                Response::HTTP_BAD_REQUEST
            );
        }
        $entityManager->persist($employee);
        $entityManager->flush();

        return new JsonResponse(
            ['message' => 'Employee created!'],
            Response::HTTP_CREATED
        );
    }
    #[Route('/employee/{id}', name: 'employee_show', methods:'GET')]
    public function showEmployee(
        EmployeeRepository $employeeRepository,
        int $id
    ): Response {
        $employee = $employeeRepository->find($id);
        if (!$employee) {
            return $this->json(
                'No employee found for id' . $id,
                404
            );
        }
        $data =  [
            'id'        => $employee->getId(),
            'fullname'  => $employee->getFullname(),
            'email'      => $employee->getEmail(),
            'degree'     => $employee->getDegree(),
            'designation' => $employee->getDesignation(),
            'address'    => $employee->getAddress(),
            'contact'    => $employee->getContact(),
            'password'  => $employee->getPassword(),
        ];
        return $this->json($data);
    }
    #[Route('/employee/{id}', name: 'employee_edit', methods:['PUT','PATCH'])]
    public function editEmployee(
        EntityManagerInterface $entityManager,
        EmployeeRepository $employeeRepository,
        Request $request,
        int $id
    ): Response {
        $employee = $employeeRepository->find($id);
        if (!$employee) {
            return $this->json(
                'No employee found for id' . $id,
                404
            );
        }
        $content = json_decode($request->getContent());
        $employee->setFullname($content->fullname);
        $employee->setEmail($content->email);
        $employee->setPassword($content->password);
        $employee->setDegree($content->degree);
        $employee->setDesignation($content->designation);
        $employee->setAddress($content->address);
        $employee->setContact($content->contact);
        $entityManager->flush();
        $data = [
            'id'        => $employee->getId(),
            'name'       => $employee->getFullname(),
            'password'   => $employee->getPassword(),
            'email'      => $employee->getEmail(),
            'degree'     => $employee->getDegree(),
            'designation' => $employee->getDesignation(),
            'address'    => $employee->getAddress(),
            'contact'    => $employee->getContact(),
        ];
        return $this->json($data);
    }
    #[Route('/employee/{id}', name: 'employee_delete', methods:'DELETE')]
    public function deleteEmployee(
        EntityManagerInterface $entityManager,
        EmployeeRepository $employeeRepository,
        int $id
    ): Response {
        $employee = $employeeRepository->find($id);
        if (!$employee) {
            return $this->json(
                'No employee found for id' . $id,
                404
            );
        }
        $entityManager->remove($employee);
        $entityManager->flush();
        return $this->json(
            'Employee with id '
            . $id .
            ' has been deleted successfully'
        );
    }
}
